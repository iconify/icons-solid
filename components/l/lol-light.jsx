import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/d/dgll2bd_b.css';
import '../../css/q/q9cootb2b.css';
import '../../css/r/rwwgm7bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><circle class="dgll2bd_b"/><circle class="q9cootb2b"/><path clip-rule="evenodd" class="rwwgm7bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lol-light"} {...others} />);
}

export default Component;
