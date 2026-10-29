import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lssi5abca.css';
import '../../css/m/m28utr75s.css';
import '../../css/e/evyvslb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lssi5abca wm-a"/><path class="m28utr75s wm-k"/><path class="evyvslb3y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-right-sketch"} {...others} />);
}

export default Component;
