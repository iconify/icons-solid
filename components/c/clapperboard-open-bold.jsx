import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gde1vd8ly.css';
import '../../css/m/miik5gboc.css';
import '../../css/m/m8_v07a_t.css';
import '../../css/w/wewvnfb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gde1vd8ly"/><path class="miik5gboc"/><path class="m8_v07a_t"/><path class="wewvnfb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-bold"} {...others} />);
}

export default Component;
