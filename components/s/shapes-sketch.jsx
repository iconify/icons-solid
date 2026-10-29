import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yyaz67b1l.css';
import '../../css/h/hw_2ns8uj.css';
import '../../css/f/fejh84b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="yyaz67b1l"/><path class="hw_2ns8uj wm-k"/><path class="fejh84b-m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shapes-sketch"} {...others} />);
}

export default Component;
