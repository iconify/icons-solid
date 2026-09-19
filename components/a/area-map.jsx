import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u2ig4gbxs.css';
import '../../css/g/gazpy_epd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="u2ig4gbxs"/><path class="gazpy_epd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:area-map"} {...others} />);
}

export default Component;
