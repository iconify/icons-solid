import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c5omvhbxk.css';
import '../../css/v/v9mfvub9v.css';
import '../../css/j/jav2_qgti.css';
import '../../css/h/hbhs4lbyp.css';
import '../../css/j/jwwy0zbhd.css';
import '../../css/i/is550bbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="c5omvhbxk wm-shadow"/><path class="v9mfvub9v"/><path class="jav2_qgti"/><path class="hbhs4lbyp"/><path class="jwwy0zbhd wm-shine"/><path class="is550bbtp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sticky-note"} {...others} />);
}

export default Component;
