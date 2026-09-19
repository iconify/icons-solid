import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t1edgcb6p.css';
import '../../css/l/lw2u413yi.css';
import '../../css/d/ds3o1_brx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="t1edgcb6p"/><path class="lw2u413yi"/><path class="ds3o1_brx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:album"} {...others} />);
}

export default Component;
