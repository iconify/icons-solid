import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw0wrli5t.css';
import '../../css/p/pixrq9syg.css';
import '../../css/y/ybvkvjmwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tw0wrli5t"/><path class="pixrq9syg"/><path class="ybvkvjmwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:paintbrush"} {...others} />);
}

export default Component;
