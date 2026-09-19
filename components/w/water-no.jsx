import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y9e39hbzc.css';
import '../../css/d/de0sabcdg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y9e39hbzc"/><path class="de0sabcdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:water-no"} {...others} />);
}

export default Component;
