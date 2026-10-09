import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dswf7-2aj.css';
import '../../css/m/mzptizb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dswf7-2aj"/><path class="mzptizb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:excavator-48-bold"} {...others} />);
}

export default Component;
