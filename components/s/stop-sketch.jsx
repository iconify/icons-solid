import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/al-1xhl-e.css';
import '../../css/g/gwdlllr-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="al-1xhl-e wm-k"/><path class="gwdlllr-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stop-sketch"} {...others} />);
}

export default Component;
