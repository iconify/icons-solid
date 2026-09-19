import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aogaj5_aa.css';
import '../../css/m/mtqe-rb2m.css';
import '../../css/i/il6_1tbws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="aogaj5_aa"/><circle class="mtqe-rb2m"/><path class="il6_1tbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:glasses"} {...others} />);
}

export default Component;
