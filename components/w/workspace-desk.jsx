import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fmer5pbcg.css';
import '../../css/o/oxobabbok.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fmer5pbcg"/><path class="oxobabbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:workspace-desk"} {...others} />);
}

export default Component;
