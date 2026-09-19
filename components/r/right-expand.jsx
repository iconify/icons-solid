import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/l2w541b5s.css';
import '../../css/n/ngen0gb1d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="l2w541b5s"/><path class="ngen0gb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:right-expand"} {...others} />);
}

export default Component;
