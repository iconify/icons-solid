import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pe9cxk9_n.css';
import '../../css/h/he_l7b3uu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pe9cxk9_n"/><path class="he_l7b3uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:tag"} {...others} />);
}

export default Component;
