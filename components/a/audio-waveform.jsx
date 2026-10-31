import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brouw0brz.css';
import '../../css/c/c-im9mbxd.css';
import '../../css/r/rgh7e6ifv.css';
import '../../css/q/qh3nhm6ak.css';
import '../../css/w/w9a_u3bex.css';
import '../../css/c/cz_x7zbls.css';
import '../../css/o/osq-t2baf.css';
import '../../css/b/bwicgjbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="brouw0brz wm-shadow"/><path class="c-im9mbxd wm-shadow"/><path class="rgh7e6ifv wm-shadow"/><path class="qh3nhm6ak wm-k"/><path class="w9a_u3bex wm-k"/><path class="cz_x7zbls wm-k"/><path class="osq-t2baf wm-shine"/><path class="bwicgjbfk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-soft3d:audio-waveform"} {...others} />);
}

export default Component;
