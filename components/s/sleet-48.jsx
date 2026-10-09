import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qthvhvbbw.css';
import '../../css/s/swgrbdc6r.css';
import '../../css/o/o5prfsbhg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qthvhvbbw"/><path class="swgrbdc6r"/><path class="o5prfsbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sleet-48"} {...others} />);
}

export default Component;
