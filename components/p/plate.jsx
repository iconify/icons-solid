import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k--uqqbpr.css';
import '../../css/l/leiq1ib6u.css';
import '../../css/h/hc2a3kmhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k--uqqbpr"/><circle class="leiq1ib6u"/><circle class="hc2a3kmhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plate"} {...others} />);
}

export default Component;
