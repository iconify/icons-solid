import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmpoacm5v.css';
import '../../css/o/otbmhscwh.css';
import '../../css/e/ev9fgtb_q.css';
import '../../css/c/cuiy_uhbg.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(.68907 0 0 .69117 -13.535 14.692)" class="hmpoacm5v"/><path class="otbmhscwh"/><ellipse class="ev9fgtb_q"/><path class="cuiy_uhbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pesde"} {...others} />);
}

export default Component;
