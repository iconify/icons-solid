import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvgdg2apg.css';
import '../../css/i/ikqvnnbxe.css';
import '../../css/c/co27a8zen.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xvgdg2apg"/><circle class="ikqvnnbxe"/><path class="co27a8zen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:blade"} {...others} />);
}

export default Component;
