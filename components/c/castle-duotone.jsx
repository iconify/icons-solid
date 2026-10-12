import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li021ljum.css';
import '../../css/b/bq6wdo9_z.css';
import '../../css/b/bj_q2zkol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="li021ljum"/><path class="bq6wdo9_z"/><path class="bj_q2zkol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:castle-duotone"} {...others} />);
}

export default Component;
