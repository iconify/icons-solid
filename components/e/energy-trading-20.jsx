import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu-l-lbvx.css';
import '../../css/g/g0t4uwbww.css';
import '../../css/c/c7ecv3bfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hu-l-lbvx"/><path class="g0t4uwbww"/><path class="c7ecv3bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-trading-20"} {...others} />);
}

export default Component;
