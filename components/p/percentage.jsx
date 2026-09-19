import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cc4k4-b0i.css';
import '../../css/c/c45-6cbdn.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="cc4k4-b0i"/><circle class="c45-6cbdn"/><path class="opakkwbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:percentage"} {...others} />);
}

export default Component;
