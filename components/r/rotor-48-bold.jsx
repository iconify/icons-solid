import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbfpednqz.css';
import '../../css/z/zl1nmrb8x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qbfpednqz"/><path class="zl1nmrb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotor-48-bold"} {...others} />);
}

export default Component;
