import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c18-773sn.css';
import '../../css/c/cngrvbctu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="c18-773sn clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 cngrvbctu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:pin-solid"} {...others} />);
}

export default Component;
