import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tth_cmy-p.css';
import '../../css/a/agi54rj7k.css';
import '../../css/j/jsp36ebok.css';
import '../../css/d/d94gehbjp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tth_cmy-p"/><path class="agi54rj7k"/><path class="jsp36ebok"/><path class="d94gehbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ticket"} {...others} />);
}

export default Component;
