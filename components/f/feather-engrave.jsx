import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9msuwbwv.css';
import '../../css/w/w8tee1byy.css';
import '../../css/g/ggspghb0w.css';
import '../../css/m/mnalv31ip.css';
import '../../css/u/ulw-1mb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b9msuwbwv wm-k"/><path class="w8tee1byy wm-a"/><path class="ggspghb0w wm-shadow"/><path class="mnalv31ip wm-k"/><path class="ulw-1mb-v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:feather-engrave"} {...others} />);
}

export default Component;
