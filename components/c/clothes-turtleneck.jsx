import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bxqc1kmci.css';
import '../../css/d/dq5cugb8z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bxqc1kmci"/><path class="dq5cugb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clothes-turtleneck"} {...others} />);
}

export default Component;
