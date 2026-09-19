import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/z/zhbwnwpdx.css';
import '../../css/d/dgcepub_v.css';
import '../../css/v/v3nz-qbeu.css';
import '../../css/q/q76ie-dcz.css';
import '../../css/w/wstwa79qw.css';
import '../../css/w/wkq7xl7tx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="zhbwnwpdx"/><path class="dgcepub_v"/><rect class="v3nz-qbeu"/><rect class="q76ie-dcz"/><rect class="wstwa79qw"/><path class="wkq7xl7tx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light-2-bold"} {...others} />);
}

export default Component;
