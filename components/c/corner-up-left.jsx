import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kn1cqwdub.css';
import '../../css/n/n4q6r3b3j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kn1cqwdub"/><path class="n4q6r3b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-up-left"} {...others} />);
}

export default Component;
