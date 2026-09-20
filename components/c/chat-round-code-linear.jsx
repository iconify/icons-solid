import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/j/jr3u5y25z.css';
import '../../css/j/joaj3f0ng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="b_mqzbbbw"/><path class="jr3u5y25z"/><path class="joaj3f0ng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-linear"} {...others} />);
}

export default Component;
