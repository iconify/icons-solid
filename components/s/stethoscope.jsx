import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b0s6xwrbm.css';
import '../../css/q/qqpblxf5z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b0s6xwrbm"/><path class="qqpblxf5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stethoscope"} {...others} />);
}

export default Component;
