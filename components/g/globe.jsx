import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh7riy7yn.css';
import '../../css/f/fmcz07blt.css';
import '../../css/d/dvt4pnswo.css';
import '../../css/u/u_ixfwa-t.css';
import '../../css/k/kud-3rkfq.css';
import '../../css/t/t0qqy9egb.css';
import '../../css/n/nofwbdbos.css';
import '../../css/a/a2gtbpb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh7riy7yn wm-shadow"/><path class="fmcz07blt wm-k"/><path class="dvt4pnswo wm-k"/><path class="u_ixfwa-t wm-k"/><path class="kud-3rkfq wm-k"/><path class="t0qqy9egb wm-k"/><path class="nofwbdbos wm-shine"/><path class="a2gtbpb6b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:globe"} {...others} />);
}

export default Component;
