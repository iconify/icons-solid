import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4yrw2bbq.css';
import '../../css/e/e6lx946pz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c4yrw2bbq"/><path class="e6lx946pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-cylinder-48"} {...others} />);
}

export default Component;
