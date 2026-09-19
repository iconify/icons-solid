import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cof-8obgv.css';
import '../../css/b/bpaoktbqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cof-8obgv"/><path class="bpaoktbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sunrise"} {...others} />);
}

export default Component;
