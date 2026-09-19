import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vn4okx2wl.css';
import '../../css/f/fge6z8bjk.css';
import '../../css/h/hytiksbxe.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="flen3tbdj"><circle class="vn4okx2wl"/><circle class="fge6z8bjk"/><path class="hytiksbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:voicemail-fill-12"} {...others} />);
}

export default Component;
