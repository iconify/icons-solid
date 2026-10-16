import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn2pyy8sf.css';
import '../../css/k/kk4dg3bfe.css';
import '../../css/k/k4nernbaq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wn2pyy8sf"/><path class="kk4dg3bfe"/><path class="k4nernbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rake-48"} {...others} />);
}

export default Component;
