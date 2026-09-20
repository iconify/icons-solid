import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na-tm-blr.css';
import '../../css/s/s2e84ymve.css';
import '../../css/q/q-l31ctaw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="na-tm-blr"/><path class="s2e84ymve"/><path clip-rule="evenodd" class="q-l31ctaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pictures-folder-memories-flat"} {...others} />);
}

export default Component;
