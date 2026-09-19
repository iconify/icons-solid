import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xkexcybcz.css';
import '../../css/v/v66g3ubbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="xkexcybcz"/><path class="v66g3ubbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-location-01"} {...others} />);
}

export default Component;
