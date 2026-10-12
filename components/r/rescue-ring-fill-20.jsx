import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz-qfmbmi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oz-qfmbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:rescue-ring-fill-20"} {...others} />);
}

export default Component;
