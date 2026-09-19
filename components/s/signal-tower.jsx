import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d-vp9bclj.css';
import '../../css/o/o6mn8obuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d-vp9bclj"/><path class="o6mn8obuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:signal-tower"} {...others} />);
}

export default Component;
