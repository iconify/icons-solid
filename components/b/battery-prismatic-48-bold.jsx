import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kblqbnvqy.css';
import '../../css/t/timwp37xc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kblqbnvqy"/><path class="timwp37xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-prismatic-48-bold"} {...others} />);
}

export default Component;
