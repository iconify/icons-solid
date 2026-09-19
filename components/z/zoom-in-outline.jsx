import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkcie3bye.css';
import '../../css/k/krrpdpo_l.css';
import '../../css/m/m_v8qk4-a.css';
import '../../css/u/u_009_bhm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nkcie3bye"/><path clip-rule="evenodd" class="krrpdpo_l"/><path class="m_v8qk4-a"/><path clip-rule="evenodd" class="u_009_bhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:zoom-in-outline"} {...others} />);
}

export default Component;
