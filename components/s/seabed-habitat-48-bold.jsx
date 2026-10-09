import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cvwtbsp.css';
import '../../css/r/r4a32cb3q.css';
import '../../css/r/raz-mzj-z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d6cvwtbsp"/><path class="r4a32cb3q"/><path class="raz-mzj-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-habitat-48-bold"} {...others} />);
}

export default Component;
