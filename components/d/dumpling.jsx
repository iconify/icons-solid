import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wrifeenme.css';
import '../../css/l/l9tqyqlhi.css';
import '../../css/o/o_o6-2bot.css';
import '../../css/g/guk772bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wrifeenme"/><path class="l9tqyqlhi wm-shadow"/><path class="o_o6-2bot"/><path class="guk772bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dumpling"} {...others} />);
}

export default Component;
