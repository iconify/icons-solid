import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uth32lcje.css';
import '../../css/e/e3_i8568z.css';
import '../../css/t/toq6lbczo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uth32lcje"/><path class="e3_i8568z"/><path clip-rule="evenodd" class="toq6lbczo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:floppy-disk-flat"} {...others} />);
}

export default Component;
