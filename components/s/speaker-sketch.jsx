import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcovfn7ky.css';
import '../../css/z/z1rrn3z9c.css';
import '../../css/a/absczkmyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mcovfn7ky"/><path class="wm-k z1rrn3z9c"/><path class="absczkmyl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:speaker-sketch"} {...others} />);
}

export default Component;
