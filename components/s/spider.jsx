import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fv06uk37l.css';
import '../../css/y/ynmfgmb5l.css';
import '../../css/w/w6gybvb-m.css';
import '../../css/x/xzn61yats.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fv06uk37l wm-k"/><path class="ynmfgmb5l"/><path class="w6gybvb-m"/><path class="wm-s xzn61yats"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:spider"} {...others} />);
}

export default Component;
