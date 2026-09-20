import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df-x2abzf.css';
import '../../css/w/w9_pfn2dg.css';
import '../../css/o/or0gw7e0r.css';
import '../../css/v/vps6yzbcz.css';
import '../../css/c/crrd1v_ru.css';
import '../../css/h/hoip12bez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df-x2abzf"/><path class="w9_pfn2dg"/><path class="or0gw7e0r"/><path class="vps6yzbcz"/><path class="crrd1v_ru"/><path class="hoip12bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr-4k-light"} {...others} />);
}

export default Component;
