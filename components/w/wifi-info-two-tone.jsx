import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_2ppobyl.css';
import '../../css/y/yepmwko9k.css';
import '../../css/w/wbh3yjdrr.css';
import '../../css/x/xzzb1ne8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p_2ppobyl"/><path class="yepmwko9k"/><path class="wbh3yjdrr"/><path class="xzzb1ne8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-info-two-tone"} {...others} />);
}

export default Component;
