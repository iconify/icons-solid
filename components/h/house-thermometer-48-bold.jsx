import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/t/t8vmxhbsz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="t8vmxhbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-thermometer-48-bold"} {...others} />);
}

export default Component;
