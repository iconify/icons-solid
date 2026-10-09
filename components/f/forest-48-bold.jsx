import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wavel16di.css';
import '../../css/c/c07p4-7-o.css';
import '../../css/k/kzltt2bms.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wavel16di"/><path class="c07p4-7-o"/><path class="kzltt2bms"/><path class="d6cvwtbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forest-48-bold"} {...others} />);
}

export default Component;
