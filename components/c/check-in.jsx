import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mkd5n7taf.css';
import '../../css/y/y_e_yzf5i.css';
import '../../css/u/u4-tff-3z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mkd5n7taf"/><path class="y_e_yzf5i"/><path class="u4-tff-3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:check-in"} {...others} />);
}

export default Component;
