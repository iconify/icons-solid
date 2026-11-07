import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efadb7byl.css';
import '../../css/l/lspzmtb7m.css';
import '../../css/e/equ__7k7z.css';
import '../../css/d/dw38h4bdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="efadb7byl"/><path class="lspzmtb7m"/><path class="equ__7k7z"/><path class="dw38h4bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-large-bold-duotone"} {...others} />);
}

export default Component;
