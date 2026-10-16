import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq_n0i1md.css';
import '../../css/h/hjm-ymvbz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qq_n0i1md"/><path class="hjm-ymvbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-rod-20"} {...others} />);
}

export default Component;
