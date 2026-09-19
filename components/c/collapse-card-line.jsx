import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i02ithdua.css';
import '../../css/p/pv2btpb3d.css';
import '../../css/h/hge90v-1m.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 i02ithdua"/><path class="clr-i-outline clr-i-outline-path-2 pv2btpb3d"/><path class="clr-i-outline clr-i-outline-path-3 hge90v-1m"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:collapse-card-line"} {...others} />);
}

export default Component;
