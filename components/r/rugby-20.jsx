import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zogy43b-o.css';
import '../../css/v/vn8q6zg-o.css';
import '../../css/q/q4lpfqb2e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zogy43b-o"/><path class="vn8q6zg-o"/><path class="q4lpfqb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rugby-20"} {...others} />);
}

export default Component;
