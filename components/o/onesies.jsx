import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jovfsq3tv.css';
import '../../css/d/d-hdlvbnx.css';
import '../../css/z/zdoglobqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jovfsq3tv"/><path class="d-hdlvbnx"/><path class="zdoglobqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:onesies"} {...others} />);
}

export default Component;
