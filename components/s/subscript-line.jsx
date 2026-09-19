import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb9qjw3fz.css';
import '../../css/y/yd1q8xhfp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bb9qjw3fz clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 yd1q8xhfp"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:subscript-line"} {...others} />);
}

export default Component;
