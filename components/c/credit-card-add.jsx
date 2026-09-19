import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g3y3mu3mp.css';
import '../../css/m/mrd0i8bef.css';
import '../../css/b/bw511z_pe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g3y3mu3mp"/><path class="mrd0i8bef"/><path class="bw511z_pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-add"} {...others} />);
}

export default Component;
