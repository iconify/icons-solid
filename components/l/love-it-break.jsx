import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrp6w6b2y.css';
import '../../css/r/r3705ybdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xrp6w6b2y"/><path class="r3705ybdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:love-it-break"} {...others} />);
}

export default Component;
