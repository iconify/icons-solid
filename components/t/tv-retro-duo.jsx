import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/udjdnbp1i.css';
import '../../css/a/a069u2bcq.css';
import '../../css/n/neaq6ub3t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="udjdnbp1i"/><path class="a069u2bcq"/><path class="neaq6ub3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tv-retro-duo"} {...others} />);
}

export default Component;
