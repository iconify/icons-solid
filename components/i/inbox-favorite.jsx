import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p_tt7mb3x.css';
import '../../css/z/zqn-lab-f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p_tt7mb3x"/><path class="zqn-lab-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:inbox-favorite"} {...others} />);
}

export default Component;
