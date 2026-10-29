import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3gizfb_u.css';
import '../../css/z/z95qg-6hx.css';
import '../../css/l/l1j5ucc-y.css';
import '../../css/p/pqnhgpb6g.css';
import '../../css/u/uo8qjwdiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a3gizfb_u wm-deco"/><path class="wm-k z95qg-6hx"/><path class="l1j5ucc-y wm-k"/><path class="pqnhgpb6g wm-k"/><path class="uo8qjwdiv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-right"} {...others} />);
}

export default Component;
