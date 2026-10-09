import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb1oskbsf.css';
import '../../css/m/mkb2ul-2f.css';
import '../../css/b/bh86-acav.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mb1oskbsf"/><path class="mkb2ul-2f"/><path class="bh86-acav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-donut-20"} {...others} />);
}

export default Component;
