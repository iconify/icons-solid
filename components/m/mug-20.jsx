import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h77o0gzdy.css';
import '../../css/u/uh9wjbc8d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h77o0gzdy"/><path class="uh9wjbc8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mug-20"} {...others} />);
}

export default Component;
