import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv51c3bzy.css';
import '../../css/h/h09j6xbhq.css';
import '../../css/p/p1u31l47s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nv51c3bzy"/><path class="h09j6xbhq"/><path class="p1u31l47s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermocouple-48-bold"} {...others} />);
}

export default Component;
