import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gp0ml1bey.css';
import '../../css/g/gx_q9cc-s.css';
import '../../css/d/dc5wpccoq.css';
import '../../css/p/pjqa07bbp.css';
import '../../css/s/skqzgzjwd.css';
import '../../css/f/fx1365b_v.css';
import '../../css/n/nzraylb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="gp0ml1bey"/><path class="gx_q9cc-s"/><path class="dc5wpccoq wm-shine"/><path class="pjqa07bbp wm-k"/><path class="skqzgzjwd wm-a"/><path class="fx1365b_v"/><path class="nzraylb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:toggle"} {...others} />);
}

export default Component;
