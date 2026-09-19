import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x4kvhkb3w.css';
import '../../css/b/bhpciutjo.css';
import '../../css/l/lczvgixin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="x4kvhkb3w"/><path class="bhpciutjo"/><path class="lczvgixin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:find-one"} {...others} />);
}

export default Component;
