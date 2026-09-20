import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz6k3dbmt.css';
import '../../css/z/zdykdy6hf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zz6k3dbmt"/><path clip-rule="evenodd" class="zdykdy6hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:input-box-flat"} {...others} />);
}

export default Component;
