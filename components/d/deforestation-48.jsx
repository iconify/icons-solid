import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psjcnq9zk.css';
import '../../css/l/l0jza5bzv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="psjcnq9zk"/><path class="l0jza5bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:deforestation-48"} {...others} />);
}

export default Component;
