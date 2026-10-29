import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lt13tgbxk.css';
import '../../css/f/f9fv-7vke.css';
import '../../css/c/c_n5xkbwe.css';
import '../../css/t/ti-ubwbxj.css';
import '../../css/c/cdaibibwy.css';
import '../../css/f/ffecewmsw.css';
import '../../css/m/m_ojaltnj.css';
import '../../css/o/oy9iho6sp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lt13tgbxk wm-shadow"/><path class="f9fv-7vke"/><path class="c_n5xkbwe"/><path class="ti-ubwbxj"/><path class="cdaibibwy"/><path class="ffecewmsw"/><path class="m_ojaltnj wm-shine"/><path class="oy9iho6sp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:utensils"} {...others} />);
}

export default Component;
