import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c-vzr4ndx.css';
import '../../css/c/cbqoc-twd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c-vzr4ndx"/><path class="cbqoc-twd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fruiter"} {...others} />);
}

export default Component;
