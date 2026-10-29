import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tyc3wod7f.css';
import '../../css/b/bn-fczxak.css';
import '../../css/u/uc23p5bxt.css';
import '../../css/l/lwtwrjtki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tyc3wod7f wm-k"/><path class="bn-fczxak wm-a"/><path class="uc23p5bxt wm-k"/><path class="lwtwrjtki wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rainbow-sketch"} {...others} />);
}

export default Component;
