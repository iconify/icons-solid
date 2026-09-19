import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jo1zsubfb.css';
import '../../css/l/lcee_744z.css';
import '../../css/g/g0gv0wt3x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jo1zsubfb"/><path class="lcee_744z"/><path class="g0gv0wt3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:database-lock"} {...others} />);
}

export default Component;
