import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vukmlib7r.css';
import '../../css/e/e31pe1ygs.css';
import '../../css/q/qw45uljby.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vukmlib7r"/><path class="e31pe1ygs"/><path class="qw45uljby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-9v-20"} {...others} />);
}

export default Component;
