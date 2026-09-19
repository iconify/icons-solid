import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxczrmbzw.css';
import '../../css/h/h0tq43bwq.css';
import '../../css/r/r8paa_b1i.css';
import '../../css/i/ii26z8_fm.css';
import '../../css/k/kkdc8gi8h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mxczrmbzw"/><path class="h0tq43bwq"/><circle transform="rotate(90 34 34)" class="r8paa_b1i"/><path class="ii26z8_fm"/><circle class="kkdc8gi8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:abnormal"} {...others} />);
}

export default Component;
