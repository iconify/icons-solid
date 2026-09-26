import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvc65tz1p.css';
import '../../css/s/skf2dub_m.css';
import '../../css/o/oyjqk5bct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gvc65tz1p"/><path class="skf2dub_m"/><path class="oyjqk5bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-horizontal-broken"} {...others} />);
}

export default Component;
