import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpjq1ubkk.css';
import '../../css/m/mbu6h6bik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xpjq1ubkk"/><path class="mbu6h6bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-fire-48-bold"} {...others} />);
}

export default Component;
