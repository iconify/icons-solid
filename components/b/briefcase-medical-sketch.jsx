import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ykm4gac9n.css';
import '../../css/u/ug04ojbab.css';
import '../../css/e/ec_xkzblh.css';
import '../../css/k/k0cxohbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ykm4gac9n"/><path class="ug04ojbab wm-a"/><path class="ec_xkzblh wm-k"/><path class="k0cxohbmd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-medical-sketch"} {...others} />);
}

export default Component;
