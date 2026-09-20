import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wk8gzub6u.css';
import '../../css/w/w89_0fcrk.css';
import '../../css/k/k-qmgxbel.css';
import '../../css/i/i5tw7mw9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wk8gzub6u"/><path class="w89_0fcrk"/><path class="k-qmgxbel"/><path class="i5tw7mw9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-line-duotone"} {...others} />);
}

export default Component;
