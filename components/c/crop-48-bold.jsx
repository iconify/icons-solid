import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5slb8bxt.css';
import '../../css/l/lukcxwqgj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e5slb8bxt"/><path class="lukcxwqgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crop-48-bold"} {...others} />);
}

export default Component;
