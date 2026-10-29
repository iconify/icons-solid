import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c7dflx-fc.css';
import '../../css/f/f8r3apmab.css';
import '../../css/u/us1ce_bmw.css';
import '../../css/a/asagb8nfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c7dflx-fc"/><path class="f8r3apmab wm-a"/><path class="us1ce_bmw wm-k"/><path class="asagb8nfb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-json-sketch"} {...others} />);
}

export default Component;
