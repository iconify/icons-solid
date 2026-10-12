import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqb_ttb0h.css';
import '../../css/b/bx5la-bud.css';
import '../../css/q/q5ceqyhfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sqb_ttb0h"/><path class="bx5la-bud"/><path class="q5ceqyhfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:highlighter-duotone"} {...others} />);
}

export default Component;
