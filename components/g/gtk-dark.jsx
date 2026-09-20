import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/h/hyqbivb0g.css';
import '../../css/e/eo4kxo38n.css';
import '../../css/j/j76rm9bbl.css';
import '../../css/i/i8zu89bux.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="hyqbivb0g"/><path class="eo4kxo38n"/><path class="j76rm9bbl"/><path class="i8zu89bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gtk-dark"} {...others} />);
}

export default Component;
