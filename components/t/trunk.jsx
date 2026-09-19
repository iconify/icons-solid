import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bezyd7b3w.css';
import '../../css/y/y1_alg6mo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="bezyd7b3w"/><path class="y1_alg6mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trunk"} {...others} />);
}

export default Component;
