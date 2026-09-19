import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i6bc1bbpn.css';
import '../../css/s/sg--oqwwb.css';
import '../../css/a/afgrcjb4w.css';
import '../../css/k/k0l0khh9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i6bc1bbpn"/><path class="sg--oqwwb"/><path class="afgrcjb4w"/><path class="k0l0khh9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-locked"} {...others} />);
}

export default Component;
