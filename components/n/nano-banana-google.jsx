import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opq-hhbcq.css';
import '../../css/b/bb03p5rwu.css';
import '../../css/u/uc313jbnj.css';
import '../../css/d/dw4j-tbmh.css';
import '../../css/w/wzrgt9biy.css';
import '../../css/x/xn8lvkclf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opq-hhbcq"/><path class="bb03p5rwu"/><path class="uc313jbnj"/><path class="dw4j-tbmh"/><path clip-rule="evenodd" class="wzrgt9biy"/><path class="xn8lvkclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nano-banana-google"} {...others} />);
}

export default Component;
