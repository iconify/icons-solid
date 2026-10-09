import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljun7bd8t.css';
import '../../css/y/yk5jtlbyy.css';
import '../../css/w/wj33zbcyf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ljun7bd8t"/><path class="yk5jtlbyy"/><path class="wj33zbcyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-limit-20-bold"} {...others} />);
}

export default Component;
