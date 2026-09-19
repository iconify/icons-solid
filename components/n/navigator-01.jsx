import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qj7knv_bc.css';
import '../../css/k/kxjbmwcmx.css';
import '../../css/e/efa-lgbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qj7knv_bc"/><path class="kxjbmwcmx"/><path class="efa-lgbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:navigator-01"} {...others} />);
}

export default Component;
