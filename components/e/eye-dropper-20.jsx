import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9zishbhy.css';
import '../../css/j/j344wacyx.css';
import '../../css/c/cti30rbcu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9zishbhy"/><path class="j344wacyx"/><path class="cti30rbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-dropper-20"} {...others} />);
}

export default Component;
