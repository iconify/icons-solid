import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/c/cv6s5pbwf.css';
import '../../css/e/egogahbre.css';
import '../../css/l/l833663_k.css';
import '../../css/e/ecxk7gbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="cv6s5pbwf"/><path class="egogahbre"/><path class="l833663_k wm-shine"/><path class="ecxk7gbiv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:square"} {...others} />);
}

export default Component;
