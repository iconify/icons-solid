import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mnbdjobol.css';
import '../../css/p/pob-507pd.css';
import '../../css/y/yt4nl8b6h.css';
import '../../css/t/tlrdff70f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mnbdjobol"/><path class="pob-507pd wm-a"/><path class="wm-k yt4nl8b6h"/><path class="tlrdff70f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dollar-sign-sketch"} {...others} />);
}

export default Component;
