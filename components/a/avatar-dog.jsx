import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jeqr_-e-s.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/w/w_bc26baz.css';
import '../../css/b/bz40l3r6v.css';
import '../../css/h/h-9fzqies.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jeqr_-e-s"/><path class="kn21p-bsc"/><path class="w_bc26baz wm-shine"/><path class="bz40l3r6v wm-k"/><path class="h-9fzqies wm-a"/><path class="b2qohnadj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-dog"} {...others} />);
}

export default Component;
