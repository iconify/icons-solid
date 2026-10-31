import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wsbu9urln.css';
import '../../css/v/v249j39fq.css';
import '../../css/i/i3bl3xbpw.css';
import '../../css/m/m547vkbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wsbu9urln"/><path class="v249j39fq wm-shadow"/><path class="i3bl3xbpw"/><path class="m547vkbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bath"} {...others} />);
}

export default Component;
