import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8zhq3bqa.css';
import '../../css/k/k3148ab8q.css';
import '../../css/x/xmpbrx25v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e8zhq3bqa"/><path class="k3148ab8q"/><path class="xmpbrx25v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-kit-48"} {...others} />);
}

export default Component;
