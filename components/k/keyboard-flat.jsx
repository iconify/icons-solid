import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olf1-rzdy.css';
import '../../css/k/k5qeymb0b.css';
import '../../css/m/m3psodbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="olf1-rzdy"/><path class="k5qeymb0b"/><path class="m3psodbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:keyboard-flat"} {...others} />);
}

export default Component;
