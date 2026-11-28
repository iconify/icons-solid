import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tm71hluex.css';
import '../../css/u/u33-yabev.css';
import '../../css/b/b529e0bmt.css';
import '../../css/i/i_zq9xbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tm71hluex"/><path class="u33-yabev"/><path class="b529e0bmt"/><path class="i_zq9xbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:repeat-duo"} {...others} />);
}

export default Component;
