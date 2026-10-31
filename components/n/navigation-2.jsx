import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cdli1kb8z.css';
import '../../css/i/im3vv-bcs.css';
import '../../css/j/j5g7r7bey.css';
import '../../css/d/dsrl4bbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cdli1kb8z wm-shadow"/><path class="im3vv-bcs wm-shadow"/><path class="j5g7r7bey"/><path class="dsrl4bbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:navigation-2"} {...others} />);
}

export default Component;
