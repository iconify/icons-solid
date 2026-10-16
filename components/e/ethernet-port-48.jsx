import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3d17v-0n.css';
import '../../css/o/ok69a315p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o3d17v-0n"/><path class="ok69a315p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ethernet-port-48"} {...others} />);
}

export default Component;
