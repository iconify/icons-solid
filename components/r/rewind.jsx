import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-1p4g0rs.css';
import '../../css/y/ypam41bwm.css';
import '../../css/g/gu1wusqye.css';
import '../../css/w/wdjf2fbkw.css';
import '../../css/a/a1luu0_pf.css';
import '../../css/e/eiza6vbga.css';
import '../../css/r/rrbgomxnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o-1p4g0rs wm-k"/><path class="wm-k ypam41bwm"/><path class="gu1wusqye wm-k"/><path class="wdjf2fbkw wm-k"/><path class="a1luu0_pf wm-k"/><path class="eiza6vbga wm-k"/><path class="rrbgomxnn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:rewind"} {...others} />);
}

export default Component;
