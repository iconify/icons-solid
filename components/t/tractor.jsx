import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr5jdpbbl.css';
import '../../css/e/e56qc54my.css';
import '../../css/t/t64jy78oe.css';
import '../../css/x/x677y-bul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="rr5jdpbbl"/><circle class="e56qc54my"/><path class="t64jy78oe"/><path class="x677y-bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tractor"} {...others} />);
}

export default Component;
