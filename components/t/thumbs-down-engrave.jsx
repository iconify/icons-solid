import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nz-4k6b1r.css';
import '../../css/q/q5zbuvb2k.css';
import '../../css/r/rdefdcb6m.css';
import '../../css/b/bos983bva.css';
import '../../css/m/mezep8bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nz-4k6b1r wm-k"/><path class="q5zbuvb2k wm-a"/><path class="rdefdcb6m wm-shadow"/><path class="bos983bva wm-k"/><path class="mezep8bdy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-down-engrave"} {...others} />);
}

export default Component;
