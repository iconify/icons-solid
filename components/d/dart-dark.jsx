import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/a/ankf2q52p.css';
import '../../css/s/s7rka1x5f.css';
import '../../css/i/iyts88baw.css';
import '../../css/f/f9o4fmbpo.css';
import '../../css/l/l0bx7gbob.css';
import '../../css/p/poq1f8bkv.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="ankf2q52p"/><path class="s7rka1x5f"/><path class="iyts88baw"/><path class="f9o4fmbpo"/><path class="l0bx7gbob"/><path class="poq1f8bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:dart-dark"} {...others} />);
}

export default Component;
