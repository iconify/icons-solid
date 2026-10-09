import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gll0cba2f.css';
import '../../css/z/zmxd02b8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gll0cba2f"/><path class="zmxd02b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magnet-48"} {...others} />);
}

export default Component;
