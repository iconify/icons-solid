import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x7u6hmb4m.css';
import '../../css/w/wed_lvbsc.css';
import '../../css/q/qmi1_hbad.css';
import '../../css/r/rdbai8brp.css';
import '../../css/k/kyhj7mluc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x7u6hmb4m"/><path class="wed_lvbsc"/><path class="qmi1_hbad"/><path class="rdbai8brp"/><path class="kyhj7mluc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:trash"} {...others} />);
}

export default Component;
