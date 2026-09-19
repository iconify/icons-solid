import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjfcwybnl.css';
import '../../css/v/vrncrobzx.css';
import '../../css/k/ki4mvymot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjfcwybnl"/><path class="vrncrobzx"/><path class="ki4mvymot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:jquery"} {...others} />);
}

export default Component;
