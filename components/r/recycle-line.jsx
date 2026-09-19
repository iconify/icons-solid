import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpwrgmboq.css';
import '../../css/x/xv2a8c3hx.css';
import '../../css/l/l6u5li4qx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 rpwrgmboq"/><path class="clr-i-outline clr-i-outline-path-2 xv2a8c3hx"/><path class="clr-i-outline clr-i-outline-path-3 l6u5li4qx"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:recycle-line"} {...others} />);
}

export default Component;
