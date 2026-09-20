import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fw9v87b4c.css';
import '../../css/m/mfknfxuzn.css';
import '../../css/u/uisx9ybeb.css';
import '../../css/h/hj2a72bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fw9v87b4c"/><path class="mfknfxuzn"/><path class="uisx9ybeb"/><path class="hj2a72bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:begging-giving"} {...others} />);
}

export default Component;
