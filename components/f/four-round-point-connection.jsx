import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q0_4c0bwj.css';
import '../../css/x/xx-w1p09b.css';
import '../../css/g/gl91pxq4m.css';
import '../../css/y/yn6dafa7n.css';
import '../../css/s/szrkkkb6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q0_4c0bwj"/><path class="xx-w1p09b"/><path class="gl91pxq4m"/><path class="yn6dafa7n"/><path class="szrkkkb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:four-round-point-connection"} {...others} />);
}

export default Component;
