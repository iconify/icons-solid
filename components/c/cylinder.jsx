import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ezwev1bob.css';
import '../../css/y/yhit36cnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ezwev1bob"/><path class="yhit36cnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cylinder"} {...others} />);
}

export default Component;
