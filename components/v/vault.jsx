import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-3n49baf.css';
import '../../css/q/q8g1qb-co.css';
import '../../css/b/b9gie9x_g.css';
import '../../css/s/s73acnw4k.css';
import '../../css/j/jrrbw-btm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j-3n49baf wm-shadow"/><path class="q8g1qb-co wm-shadow"/><path class="b9gie9x_g"/><path class="s73acnw4k"/><path class="jrrbw-btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:vault"} {...others} />);
}

export default Component;
