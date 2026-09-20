import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mdfjxj7vm.css';
import '../../css/h/hvl1_kb0p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mdfjxj7vm"/><path class="hvl1_kb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:screenshot"} {...others} />);
}

export default Component;
