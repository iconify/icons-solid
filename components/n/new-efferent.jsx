import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ioxb-qb6e.css';
import '../../css/d/dzgs_abuw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ioxb-qb6e"/><path class="dzgs_abuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:new-efferent"} {...others} />);
}

export default Component;
