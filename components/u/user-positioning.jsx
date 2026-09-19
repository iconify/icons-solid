import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rgdtn1b6r.css';
import '../../css/c/c96bn9bfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="rgdtn1b6r"/><path class="c96bn9bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:user-positioning"} {...others} />);
}

export default Component;
