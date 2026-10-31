import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ao3m3ia-e.css';
import '../../css/v/vyqfn8i1l.css';
import '../../css/w/wnj7_cc1p.css';
import '../../css/v/v85pmzblh.css';
import '../../css/q/qc7v5_fxl.css';
import '../../css/f/f_7afybpu.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ao3m3ia-e wm-shadow"/><path class="vyqfn8i1l"/><path class="wnj7_cc1p"/><path class="v85pmzblh"/><path class="qc7v5_fxl"/><path class="f_7afybpu"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pin-off"} {...others} />);
}

export default Component;
