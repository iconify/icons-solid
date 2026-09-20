import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0q8vobjd.css';
import '../../css/t/tawzj5bog.css';
import '../../css/v/v98907jch.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f0q8vobjd"/><path class="tawzj5bog"/><path class="v98907jch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:login-1"} {...others} />);
}

export default Component;
