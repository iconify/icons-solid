import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkah-u8kr.css';
import '../../css/t/tfesq9c8z.css';
import '../../css/d/dvicfhbcp.css';
import '../../css/x/xf2_bdbsi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-solid clr-i-solid-path-1 vkah-u8kr"/><path class="clr-i-solid clr-i-solid-path-2 tfesq9c8z"/><path class="clr-i-solid clr-i-solid-path-3 dvicfhbcp"/><path class="clr-i-solid clr-i-solid-path-4 xf2_bdbsi"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:wifi-solid"} {...others} />);
}

export default Component;
