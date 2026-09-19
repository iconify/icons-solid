import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nwfbcgisj.css';
import '../../css/z/z4dv32bje.css';
import '../../css/q/ql86wbc_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nwfbcgisj"/><path class="z4dv32bje"/><path class="ql86wbc_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mentor"} {...others} />);
}

export default Component;
