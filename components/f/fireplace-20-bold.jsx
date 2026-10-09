import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olltwdbuj.css';
import '../../css/f/flvfxybjw.css';
import '../../css/x/xw6i8dp-o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="olltwdbuj"/><path class="flvfxybjw"/><path class="xw6i8dp-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fireplace-20-bold"} {...others} />);
}

export default Component;
