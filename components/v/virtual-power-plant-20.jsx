import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbv3grl-l.css';
import '../../css/i/idfrb-b4g.css';
import '../../css/k/kiditcb3w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jbv3grl-l"/><path class="idfrb-b4g"/><path class="kiditcb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virtual-power-plant-20"} {...others} />);
}

export default Component;
