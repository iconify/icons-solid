import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzxwkabxm.css';
import '../../css/b/b4i6hrb5r.css';
import '../../css/q/q6hlrulne.css';
import '../../css/q/q6e26kbmb.css';
import '../../css/i/ip-mhcnpg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tzxwkabxm"/><path class="b4i6hrb5r"/><path class="q6hlrulne"/><path class="q6e26kbmb"/><path class="ip-mhcnpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chess-knight"} {...others} />);
}

export default Component;
