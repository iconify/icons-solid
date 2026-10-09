import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nris9bbgu.css';
import '../../css/a/ak9f-hbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nris9bbgu"/><path class="ak9f-hbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saw-48"} {...others} />);
}

export default Component;
