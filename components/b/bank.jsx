import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c-bbc_bpd.css';
import '../../css/c/c5g7-u9cc.css';
import '../../css/l/l54so-d8u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c-bbc_bpd"/><path class="c5g7-u9cc"/><path class="l54so-d8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bank"} {...others} />);
}

export default Component;
