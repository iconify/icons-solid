import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyoh2ac4j.css';
import '../../css/w/w06re3lvj.css';
import '../../css/h/h73pcabja.css';
import '../../css/w/waex0qb8p.css';
import '../../css/z/z4bmhwn3y.css';
import '../../css/r/ri8odxd0l.css';
import '../../css/t/tt2fesfif.css';
import '../../css/k/klzv1gy_g.css';
import '../../css/y/y_fhnnb6z.css';
import '../../css/g/ggu6p6eza.css';
import '../../css/g/g0prwswlf.css';
import '../../css/y/y789z5nvt.css';
import '../../css/r/rzl-fbbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zyoh2ac4j"/><path class="w06re3lvj"/><path class="h73pcabja"/><path class="waex0qb8p"/><path class="z4bmhwn3y"/><path class="ri8odxd0l"/><path class="tt2fesfif"/><path class="klzv1gy_g"/><path class="y_fhnnb6z"/><path class="ggu6p6eza wm-shine"/><path class="g0prwswlf wm-shine"/><path class="y789z5nvt"/><path class="rzl-fbbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:power"} {...others} />);
}

export default Component;
