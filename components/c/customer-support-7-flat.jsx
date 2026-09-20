import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fepog6hcc.css';
import '../../css/p/p5c_gev7k.css';
import '../../css/b/b2qeqbbuw.css';
import '../../css/v/vkxtl9xjy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fepog6hcc"/><path clip-rule="evenodd" class="p5c_gev7k"/><path class="b2qeqbbuw"/><path class="vkxtl9xjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:customer-support-7-flat"} {...others} />);
}

export default Component;
