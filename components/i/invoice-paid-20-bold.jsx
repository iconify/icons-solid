import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1pz25ahp.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j1pz25ahp"/><path class="z0v5_fbef"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:invoice-paid-20-bold"} {...others} />);
}

export default Component;
