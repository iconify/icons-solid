import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5m3vuabl.css';
import '../../css/l/l0896yttc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a5m3vuabl"/><path class="l0896yttc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-low-20"} {...others} />);
}

export default Component;
