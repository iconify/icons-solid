import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eruy9gp0e.css';
import '../../css/n/ndj3kilnh.css';
import '../../css/u/umxc3bzyq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="eruy9gp0e"/><path class="ndj3kilnh"/><path class="umxc3bzyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:average"} {...others} />);
}

export default Component;
