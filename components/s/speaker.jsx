import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lkqxq2b3p.css';
import '../../css/o/o4qxn0byw.css';
import '../../css/s/scznlvt6s.css';
import '../../css/m/mkcg5es5k.css';
import '../../css/a/a4pw0rb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lkqxq2b3p wm-shadow"/><path class="o4qxn0byw wm-shadow"/><path class="scznlvt6s"/><path class="mkcg5es5k"/><path class="a4pw0rb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:speaker"} {...others} />);
}

export default Component;
