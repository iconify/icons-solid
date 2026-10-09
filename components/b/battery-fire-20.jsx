import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9eubhbjc.css';
import '../../css/z/zp0_hubyv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z9eubhbjc"/><path class="zp0_hubyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-fire-20"} {...others} />);
}

export default Component;
