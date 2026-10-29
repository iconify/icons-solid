import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1j6pgh3s.css';
import '../../css/r/rihlu-b6l.css';
import '../../css/w/w6zl52bkl.css';
import '../../css/z/z0cvyxymj.css';
import '../../css/w/w6uug-bhh.css';
import '../../css/c/csge9hrsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r1j6pgh3s wm-k"/><path class="rihlu-b6l wm-k"/><path class="w6zl52bkl wm-k"/><path class="wm-a z0cvyxymj"/><path class="w6uug-bhh wm-a"/><path class="csge9hrsb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:signature"} {...others} />);
}

export default Component;
