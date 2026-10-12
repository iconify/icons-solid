import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9ng43b9q.css';
import '../../css/z/zgpx6ybju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9ng43b9q"/><path class="zgpx6ybju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-can-48-bold"} {...others} />);
}

export default Component;
