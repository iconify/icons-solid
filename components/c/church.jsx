import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sd7mvf3uv.css';
import '../../css/f/fpvegqb7e.css';
import '../../css/b/b3ts8cn7g.css';
import '../../css/c/cpbdakb7g.css';
import '../../css/d/dqlpkacjm.css';
import '../../css/c/czq_98r8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sd7mvf3uv wm-shadow"/><path class="fpvegqb7e wm-shadow"/><path class="b3ts8cn7g"/><path class="cpbdakb7g"/><path class="dqlpkacjm"/><path class="czq_98r8d wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:church"} {...others} />);
}

export default Component;
