import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yopadjb1x.css';
import '../../css/v/v8-8k69fj.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/x/x3nev3ias.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="yopadjb1x"/><path class="v8-8k69fj"/><circle class="d2umvjsxg"/><path class="x3nev3ias"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-bottom-dashed-scissors"} {...others} />);
}

export default Component;
