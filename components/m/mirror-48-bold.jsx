import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqn0hza6d.css';
import '../../css/h/htwye9bzz.css';
import '../../css/r/rk7gs_b9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bqn0hza6d"/><path class="htwye9bzz"/><path class="rk7gs_b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mirror-48-bold"} {...others} />);
}

export default Component;
