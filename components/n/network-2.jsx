import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_0pnfbru.css';
import '../../css/d/dlmynl3yv.css';
import '../../css/n/nvfkmhb3s.css';
import '../../css/l/l_i-3xbit.css';
import '../../css/i/if0zf3brf.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="n1lsf0bnc"><path class="q_0pnfbru"/><path class="dlmynl3yv"/><path class="nvfkmhb3s"/><path class="l_i-3xbit"/><path class="if0zf3brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:network-2"} {...others} />);
}

export default Component;
