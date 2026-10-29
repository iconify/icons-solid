import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/j/j4e6xnbta.css';
import '../../css/j/j7qb7iods.css';
import '../../css/o/oodk36b3h.css';
import '../../css/i/is550bbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="j4e6xnbta"/><path class="j7qb7iods"/><path class="oodk36b3h wm-shine"/><path class="is550bbtp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:square-code"} {...others} />);
}

export default Component;
