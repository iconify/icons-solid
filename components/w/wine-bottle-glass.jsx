import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1uro2jdl.css';
import '../../css/a/asrd5jyzg.css';
import '../../css/g/g1s4qk6lm.css';
import '../../css/b/bx_osxbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v1uro2jdl"/><path class="asrd5jyzg"/><path class="g1s4qk6lm"/><path class="bx_osxbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wine-bottle-glass"} {...others} />);
}

export default Component;
