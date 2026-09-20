import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zykx9oknz.css';
import '../../css/a/ai1qf_bim.css';
import '../../css/o/ohe40ccui.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zykx9oknz"/><path clip-rule="evenodd" class="ai1qf_bim"/><path clip-rule="evenodd" class="ohe40ccui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:give-gift-flat"} {...others} />);
}

export default Component;
