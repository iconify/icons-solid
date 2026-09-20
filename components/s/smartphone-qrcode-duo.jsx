import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/t/tivz0acsh.css';
import '../../css/f/fh7abmerb.css';
import '../../css/z/zhop2mb0x.css';
import '../../css/v/v4khei8ko.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="tivz0acsh"/><path class="fh7abmerb"/><path class="zhop2mb0x"/><path class="v4khei8ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-qrcode-duo"} {...others} />);
}

export default Component;
