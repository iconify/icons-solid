import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js4ro1b0l.css';
import '../../css/y/y-afnmd_s.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="js4ro1b0l"/><path class="y-afnmd_s"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-check-48"} {...others} />);
}

export default Component;
