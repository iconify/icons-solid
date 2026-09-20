import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8pd1bbrw.css';
import '../../css/c/cjnpadbpt.css';
import '../../css/k/kiophgbva.css';
import '../../css/l/lu8z_bc0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x8pd1bbrw"/><path class="cjnpadbpt"/><path class="kiophgbva"/><path class="lu8z_bc0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:programming-script-1"} {...others} />);
}

export default Component;
