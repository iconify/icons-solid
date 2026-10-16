import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbc6c5bqk.css';
import '../../css/x/xy_8owk3p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nbc6c5bqk"/><path class="xy_8owk3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-joint-48"} {...others} />);
}

export default Component;
