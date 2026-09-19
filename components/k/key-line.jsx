import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7alv7cdp.css';
import '../../css/a/ai4y1x-zp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<rect class="clr-i-outline clr-i-outline-path-1 g7alv7cdp" transform="rotate(-45 11.192 12.004)"/><path class="ai4y1x-zp clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:key-line"} {...others} />);
}

export default Component;
