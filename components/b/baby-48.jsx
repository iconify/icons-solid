import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7474gbcq.css';
import '../../css/w/w2h_ynbwx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w7474gbcq"/><path class="w2h_ynbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:baby-48"} {...others} />);
}

export default Component;
