import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vt2w14bot.css';
import '../../css/d/dzi0emb2h.css';
import '../../css/d/d1n0pbcuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vt2w14bot"/><path class="dzi0emb2h"/><path class="d1n0pbcuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-star-duotone"} {...others} />);
}

export default Component;
