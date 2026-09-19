import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbzr0ebwt.css';
import '../../css/d/dff-kwkxe.css';
import '../../css/r/ruqsmcv7c.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 vbzr0ebwt"/><path class="clr-i-outline clr-i-outline-path-2 dff-kwkxe"/><path class="clr-i-outline clr-i-outline-path-3 ruqsmcv7c"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:briefcase-line"} {...others} />);
}

export default Component;
