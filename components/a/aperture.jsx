import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/p/ph1-1acog.css';
import '../../css/z/zu87p3buw.css';
import '../../css/e/ec9prsbjn.css';
import '../../css/k/klp4rmnfm.css';
import '../../css/q/qsm46wbrb.css';
import '../../css/f/f5-obobic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="ph1-1acog"/><path class="zu87p3buw"/><path class="ec9prsbjn"/><path class="klp4rmnfm"/><path class="qsm46wbrb"/><path class="f5-obobic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:aperture"} {...others} />);
}

export default Component;
