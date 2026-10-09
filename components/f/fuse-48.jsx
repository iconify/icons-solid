import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulm7ljbga.css';
import '../../css/p/pfm3u1bvw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ulm7ljbga"/><path class="pfm3u1bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuse-48"} {...others} />);
}

export default Component;
