import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zh75_ac2u.css';
import '../../css/h/h616jyu9u.css';
import '../../css/i/ibuxjwbgw.css';
import '../../css/k/kyavumnzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zh75_ac2u"/><path class="h616jyu9u wm-a"/><path class="ibuxjwbgw wm-k"/><path class="kyavumnzm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:search-sketch"} {...others} />);
}

export default Component;
