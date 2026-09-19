import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/towkzaczv.css';
import '../../css/u/u25imsb3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="towkzaczv"/><path class="u25imsb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:play-once"} {...others} />);
}

export default Component;
