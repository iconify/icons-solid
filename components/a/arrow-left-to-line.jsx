import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t41j5f0vc.css';
import '../../css/c/c0i_z4bin.css';
import '../../css/a/auyczbbzh.css';
import '../../css/m/mjdbr1b7c.css';
import '../../css/k/k9eaqtb_s.css';
import '../../css/o/oou6jw-1c.css';
import '../../css/i/i8feqmbct.css';
import '../../css/o/oytv64bib.css';
import '../../css/j/jv8qzwb1g.css';
import '../../css/l/l_rcmbqtn.css';
import '../../css/f/fao9cjb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t41j5f0vc wm-shadow"/><path class="c0i_z4bin wm-a"/><path class="auyczbbzh wm-a"/><path class="mjdbr1b7c wm-a"/><path class="k9eaqtb_s wm-a"/><path class="oou6jw-1c wm-shine"/><path class="i8feqmbct wm-k"/><path class="oytv64bib wm-k"/><path class="jv8qzwb1g wm-k"/><path class="l_rcmbqtn wm-k"/><path class="fao9cjb_o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:arrow-left-to-line"} {...others} />);
}

export default Component;
