import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8jdxt_7e.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="x8jdxt_7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:closed-captioning"} {...others} />);
}

export default Component;
