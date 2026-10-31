import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wyfdj045u.css';
import '../../css/f/fbz40u7el.css';
import '../../css/m/mf5o56bqa.css';
import '../../css/t/ttzeghclf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wyfdj045u"/><path class="fbz40u7el wm-shadow"/><path class="mf5o56bqa"/><path class="ttzeghclf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cookie"} {...others} />);
}

export default Component;
