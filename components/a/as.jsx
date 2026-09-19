import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/j/jx7g5ybpv.css';
import '../../css/c/cuwg02bnd.css';
import '../../css/j/j3r57obfv.css';
import '../../css/n/nj_ibhbtr.css';
import '../../css/v/v491l6hrm.css';
import '../../css/d/dwpcwmb-v.css';
import '../../css/x/x_7p9lbwv.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path class="jx7g5ybpv"/><path clip-rule="evenodd" class="cuwg02bnd"/><path clip-rule="evenodd" class="j3r57obfv"/><path clip-rule="evenodd" class="nj_ibhbtr"/><path clip-rule="evenodd" class="v491l6hrm"/><path clip-rule="evenodd" class="dwpcwmb-v"/><path clip-rule="evenodd" class="x_7p9lbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:as"} {...others} />);
}

export default Component;
