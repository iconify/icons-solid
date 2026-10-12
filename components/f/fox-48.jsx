import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8o7jbnvk.css';
import '../../css/x/x0f0yioou.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s8o7jbnvk"/><path class="x0f0yioou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fox-48"} {...others} />);
}

export default Component;
