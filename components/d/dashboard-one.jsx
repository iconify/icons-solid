import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/l356zpi2t.css';
import '../../css/e/er7wtcbss.css';
import '../../css/p/pvs97mopz.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="nz_20wbpz"><path class="l356zpi2t"/><circle class="er7wtcbss"/><path class="pvs97mopz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dashboard-one"} {...others} />);
}

export default Component;
