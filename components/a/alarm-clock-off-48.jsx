import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5mhtjb5j.css';
import '../../css/l/lnepfmblf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w5mhtjb5j"/><path class="lnepfmblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-off-48"} {...others} />);
}

export default Component;
