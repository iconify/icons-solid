import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk7d7db1k.css';
import '../../css/i/iq3tm2n6h.css';
import '../../css/u/uhrotbb7z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sk7d7db1k"/><path class="iq3tm2n6h"/><path class="uhrotbb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-alarm-48"} {...others} />);
}

export default Component;
