import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9vkqabok.css';
import '../../css/r/r4509t42k.css';
import '../../css/j/jop4qnbza.css';
import '../../css/c/csqksxv6u.css';
import '../../css/c/cq9ww5f2y.css';
import '../../css/m/m8clgqebj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a9vkqabok wm-shadow"/><path class="r4509t42k"/><path class="jop4qnbza"/><path class="csqksxv6u"/><path class="cq9ww5f2y wm-shine"/><path class="m8clgqebj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:scan"} {...others} />);
}

export default Component;
