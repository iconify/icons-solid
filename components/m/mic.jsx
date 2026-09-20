import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rngmbwozf.css';
import '../../css/o/obx0gf1ft.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rngmbwozf"/><path class="obx0gf1ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mic"} {...others} />);
}

export default Component;
