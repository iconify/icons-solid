import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fo-owtb-e.css';
import '../../css/h/h65wmlbob.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fo-owtb-e"/><path class="h65wmlbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:battery-charging"} {...others} />);
}

export default Component;
