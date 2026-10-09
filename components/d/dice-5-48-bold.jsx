import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzp1g281f.css';
import '../../css/q/qw5zwyaky.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mzp1g281f"/><path class="qw5zwyaky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dice-5-48-bold"} {...others} />);
}

export default Component;
