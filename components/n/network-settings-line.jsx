import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e50hft7mz.css';
import '../../css/h/h6zn3sr2n.css';
import '../../css/d/djk80vbdw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 e50hft7mz"/><path class="clr-i-outline clr-i-outline-path-2 h6zn3sr2n"/><path class="clr-i-outline clr-i-outline-path-3 djk80vbdw"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:network-settings-line"} {...others} />);
}

export default Component;
