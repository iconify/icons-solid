import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/coajt-b7g.css';
import '../../css/i/iu_50qbof.css';
import '../../css/p/ps5bz1bxi.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 2)" class="n1lsf0bnc"><circle class="coajt-b7g"/><path class="iu_50qbof"/><path class="ps5bz1bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wifi-1"} {...others} />);
}

export default Component;
