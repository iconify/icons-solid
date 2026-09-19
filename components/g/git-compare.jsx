import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzpqtb_bl.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/p/p9vjoqtlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dzpqtb_bl"/><circle class="xtsrmvj7o"/><circle class="p9vjoqtlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:git-compare"} {...others} />);
}

export default Component;
