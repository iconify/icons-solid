import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j6z07byko.css';
import '../../css/d/d2oq32bzp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="j6z07byko"/><path class="d2oq32bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-hoodie"} {...others} />);
}

export default Component;
