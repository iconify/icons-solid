import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hftzc6bjl.css';
import '../../css/g/gwf5562uo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hftzc6bjl"/><path class="gwf5562uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-blade-48"} {...others} />);
}

export default Component;
