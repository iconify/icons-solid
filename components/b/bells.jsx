import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wjjv-ebjv.css';
import '../../css/k/kfs1vlehk.css';
import '../../css/v/vkkk2vbof.css';
import '../../css/z/zb5eh1b5j.css';
import '../../css/i/iocycmq6k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="h01tyzbfu"><path class="wjjv-ebjv"/><path class="kfs1vlehk"/><path class="vkkk2vbof"/><path class="zb5eh1b5j"/><path class="iocycmq6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bells"} {...others} />);
}

export default Component;
