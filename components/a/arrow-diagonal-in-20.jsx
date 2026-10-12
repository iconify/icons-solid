import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9kqie5ws.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o9kqie5ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-diagonal-in-20"} {...others} />);
}

export default Component;
