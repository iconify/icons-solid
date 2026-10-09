import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v351mchmy.css';
import '../../css/y/yjcru9-ig.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v351mchmy"/><path class="yjcru9-ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monopile-48"} {...others} />);
}

export default Component;
