import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qokjj-kmj.css';
import '../../css/a/a8vsq7owx.css';
import '../../css/p/pu0j68bkc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qokjj-kmj"/><path class="a8vsq7owx"/><path class="pu0j68bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-pitch-20-bold"} {...others} />);
}

export default Component;
