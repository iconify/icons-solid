import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2zn1-1p.css';
import '../../css/x/xfezwkenf.css';
import '../../css/j/jruix7b1s.css';
import '../../css/k/k9b500bvc.css';
import '../../css/a/adz9m6bys.css';
import '../../css/i/i9hj0wbss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ij2zn1-1p"/><path class="clr-i-outline clr-i-outline-path-2 xfezwkenf"/><path class="clr-i-outline clr-i-outline-path-3 jruix7b1s"/><path class="clr-i-outline clr-i-outline-path-4 k9b500bvc"/><path class="adz9m6bys clr-i-outline clr-i-outline-path-5"/><path class="clr-i-outline clr-i-outline-path-6 i9hj0wbss"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:crosshairs-line"} {...others} />);
}

export default Component;
