import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9dmu8blt.css';
import '../../css/g/grb0q__0e.css';
import '../../css/l/lyi2etljr.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o9dmu8blt"/><path class="grb0q__0e"/><path class="lyi2etljr"/><path class="ejdkgccas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-call-broken"} {...others} />);
}

export default Component;
