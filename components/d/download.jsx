import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xc4c9gx0s.css';
import '../../css/j/jgkbj7bxb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xc4c9gx0s"/><path class="jgkbj7bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:download"} {...others} />);
}

export default Component;
