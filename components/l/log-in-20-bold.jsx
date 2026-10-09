import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvy1pybls.css';
import '../../css/g/g63v8lcab.css';
import '../../css/i/ieb8qdn3z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lvy1pybls"/><path class="g63v8lcab"/><path class="ieb8qdn3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-in-20-bold"} {...others} />);
}

export default Component;
