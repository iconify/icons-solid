import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r72-5pblm.css';
import '../../css/n/n0rfpxv8v.css';
import '../../css/u/uera-ebmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r72-5pblm wm-k"/><path class="n0rfpxv8v wm-k"/><path class="uera-ebmf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minimize-2-sketch"} {...others} />);
}

export default Component;
