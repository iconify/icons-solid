import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ey246mh2m.css';
import '../../css/a/apivccbup.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ey246mh2m"/><path class="apivccbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:translate"} {...others} />);
}

export default Component;
