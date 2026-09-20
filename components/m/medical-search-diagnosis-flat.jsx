import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i27vaob_o.css';
import '../../css/f/f0bgt7bxk.css';
import '../../css/l/ls1qmgb_m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i27vaob_o"/><path clip-rule="evenodd" class="f0bgt7bxk"/><path class="ls1qmgb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:medical-search-diagnosis-flat"} {...others} />);
}

export default Component;
