import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g8ciazbyu.css';
import '../../css/d/dmtq6nxpb.css';
import '../../css/u/u7cx-4fdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g8ciazbyu"/><path class="dmtq6nxpb"/><path class="u7cx-4fdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pineapple"} {...others} />);
}

export default Component;
