import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t-qhqabuj.css';
import '../../css/l/ldidohb6k.css';
import '../../css/d/ddu-bcw9l.css';
import '../../css/c/cn4uh2bns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t-qhqabuj wm-shadow"/><path class="ldidohb6k wm-shadow"/><path class="ddu-bcw9l"/><path class="cn4uh2bns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:keyboard"} {...others} />);
}

export default Component;
