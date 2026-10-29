import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oxdnqnmyo.css';
import '../../css/l/lndngmona.css';
import '../../css/z/zcogffc2s.css';
import '../../css/x/x4gwi34gg.css';
import '../../css/z/zrmmxlb3u.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oxdnqnmyo wm-shadow"/><path class="lndngmona"/><path class="zcogffc2s"/><path class="x4gwi34gg"/><path class="zrmmxlb3u"/><path class="kn6ik1w-e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:signal"} {...others} />);
}

export default Component;
