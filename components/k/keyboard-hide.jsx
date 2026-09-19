import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yupvxm31u.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="yupvxm31u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:keyboard-hide"} {...others} />);
}

export default Component;
