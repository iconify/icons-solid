import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eduva4b7t.css';
import '../../css/m/mnciwzbrt.css';
import '../../css/r/r79vqubxp.css';
import '../../css/s/sefx_kbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eduva4b7t"/><path class="mnciwzbrt"/><path class="r79vqubxp"/><path class="sefx_kbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-outline"} {...others} />);
}

export default Component;
