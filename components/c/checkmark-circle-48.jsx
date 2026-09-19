import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fevox3bea.css';
import '../../css/q/q91xjhbuj.css';
import '../../css/r/r_dyu4sco.css';
import '../../css/n/newr62bds.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y2n-rtl6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGU1lBIO7X)" class="fevox3bea"/><path fill="url(#SVGUsopid1R)" class="q91xjhbuj"/><defs><linearGradient id="SVGU1lBIO7X" x1="5.429" x2="33.033" y1="11.5" y2="40.18" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVGUsopid1R" x1="18.375" x2="21.586" y1="18.627" y2="33.741" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:checkmark-circle-48"} {...others} />);
}

export default Component;
