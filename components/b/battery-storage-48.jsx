import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur5zgrerl.css';
import '../../css/v/vj1jlxbvg.css';
import '../../css/u/u_j7ojbzb.css';
import '../../css/m/m12zqk44s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ur5zgrerl"/><path class="vj1jlxbvg"/><path class="u_j7ojbzb"/><path class="m12zqk44s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-48"} {...others} />);
}

export default Component;
