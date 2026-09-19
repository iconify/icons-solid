import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wi6bj6b3d.css';
import '../../css/z/zbulgnbcg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wi6bj6b3d"/><path class="zbulgnbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:translation"} {...others} />);
}

export default Component;
