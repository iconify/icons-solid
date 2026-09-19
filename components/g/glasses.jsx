import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lfu9081tj.css';
import '../../css/u/ukpkwrb3v.css';
import '../../css/i/il6_1tbws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="lfu9081tj"/><circle class="ukpkwrb3v"/><path class="il6_1tbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:glasses"} {...others} />);
}

export default Component;
