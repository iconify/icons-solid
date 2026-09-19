import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q048q2b9g.css';
import '../../css/j/jt31pohym.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="q048q2b9g"/><path class="jt31pohym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:setting-three"} {...others} />);
}

export default Component;
