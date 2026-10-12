import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbfxhrdcj.css';
import '../../css/r/rs2_d-b2c.css';
import '../../css/q/qwxvauhsb.css';
import '../../css/r/rbyrefbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbfxhrdcj"/><path class="rs2_d-b2c"/><path class="qwxvauhsb"/><path class="rbyrefbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-pen-duotone"} {...others} />);
}

export default Component;
