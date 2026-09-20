import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0td5dbhn.css';
import '../../css/q/qfluk7b_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m0td5dbhn"/><path clip-rule="evenodd" class="qfluk7b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:warning-16"} {...others} />);
}

export default Component;
