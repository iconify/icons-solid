import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zio0--bwu.css';
import '../../css/h/hdbq3cbgp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zio0--bwu"/><path class="hdbq3cbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:umbrella-two"} {...others} />);
}

export default Component;
