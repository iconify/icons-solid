import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbe-aclic.css';
import '../../css/i/iv-96i7pw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cbe-aclic"/><path class="iv-96i7pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cylinder-20"} {...others} />);
}

export default Component;
