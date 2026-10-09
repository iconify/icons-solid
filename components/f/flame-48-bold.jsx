import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1y455t_n.css';
import '../../css/c/cqs0s2txc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k1y455t_n"/><path class="cqs0s2txc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flame-48-bold"} {...others} />);
}

export default Component;
