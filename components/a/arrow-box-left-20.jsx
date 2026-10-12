import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5sc-_b4d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s5sc-_b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-box-left-20"} {...others} />);
}

export default Component;
