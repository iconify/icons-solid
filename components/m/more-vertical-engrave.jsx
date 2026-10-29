import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nrrik9bat.css';
import '../../css/a/azil_odjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nrrik9bat"/><path class="azil_odjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:more-vertical-engrave"} {...others} />);
}

export default Component;
