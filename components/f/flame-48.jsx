import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqe_kssen.css';
import '../../css/j/jl4dq47bj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pqe_kssen"/><path class="jl4dq47bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flame-48"} {...others} />);
}

export default Component;
