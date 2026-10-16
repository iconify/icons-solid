import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn87rsbwd.css';
import '../../css/l/laahlfxkj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cn87rsbwd"/><path class="laahlfxkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:immersion-heater-48-bold"} {...others} />);
}

export default Component;
