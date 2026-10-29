import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/c/cv6s5pbwf.css';
import '../../css/o/oo4_ehhca.css';
import '../../css/c/cdx3i5ugk.css';
import '../../css/e/ecxk7gbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="cv6s5pbwf"/><path class="oo4_ehhca"/><path class="cdx3i5ugk wm-shine"/><path class="ecxk7gbiv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:circuit-board"} {...others} />);
}

export default Component;
