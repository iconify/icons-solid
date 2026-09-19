import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ir6kd69-z.css';
import '../../css/u/u_0h2wn2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ir6kd69-z"/><path class="u_0h2wn2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:skip-back"} {...others} />);
}

export default Component;
