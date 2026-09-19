import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lcee_744z.css';
import '../../css/d/d0whacb4t.css';
import '../../css/h/hdf6pbbtd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lcee_744z"/><path class="d0whacb4t"/><path class="hdf6pbbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:database-forbid"} {...others} />);
}

export default Component;
