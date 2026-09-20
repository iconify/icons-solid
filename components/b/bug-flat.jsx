import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip64nl_0o.css';
import '../../css/u/u2tnamwfv.css';
import '../../css/g/g5didnbxe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ip64nl_0o"/><path class="u2tnamwfv"/><path class="g5didnbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bug-flat"} {...others} />);
}

export default Component;
