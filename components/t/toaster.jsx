import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a62_2ql-m.css';
import '../../css/v/vs20wtbvz.css';
import '../../css/m/m1cmcxbib.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="a62_2ql-m"/><path class="vs20wtbvz"/><path class="m1cmcxbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:toaster"} {...others} />);
}

export default Component;
