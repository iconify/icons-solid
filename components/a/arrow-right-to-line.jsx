import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n99c7obse.css';
import '../../css/a/av_m4nb6v.css';
import '../../css/u/ul75skb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n99c7obse wm-shadow"/><path class="av_m4nb6v wm-shadow"/><path class="ul75skb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-right-to-line"} {...others} />);
}

export default Component;
