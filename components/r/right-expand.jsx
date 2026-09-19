import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ibywwyb0e.css';
import '../../css/n/ngen0gb1d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="ibywwyb0e"/><path class="ngen0gb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:right-expand"} {...others} />);
}

export default Component;
