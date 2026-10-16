import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1h9j1hcr.css';
import '../../css/y/y497hebmi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s1h9j1hcr"/><path class="y497hebmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zero-emissions-20-bold"} {...others} />);
}

export default Component;
