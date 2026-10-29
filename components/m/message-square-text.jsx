import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/x/xs89njb2w.css';
import '../../css/w/wzk3-6r7u.css';
import '../../css/n/njwcjnxjo.css';
import '../../css/y/yci3bbcwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="xs89njb2w"/><path class="wzk3-6r7u"/><path class="njwcjnxjo wm-shine"/><path class="wm-deco yci3bbcwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-square-text"} {...others} />);
}

export default Component;
