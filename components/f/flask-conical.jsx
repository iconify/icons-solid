import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kvyhy9g9e.css';
import '../../css/e/eywc5nbyn.css';
import '../../css/z/z-3hp8b8e.css';
import '../../css/p/phleqn8cb.css';
import '../../css/s/sjd7m7ihs.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kvyhy9g9e wm-shadow"/><path class="eywc5nbyn"/><path class="z-3hp8b8e"/><path class="phleqn8cb"/><path class="sjd7m7ihs wm-shine"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:flask-conical"} {...others} />);
}

export default Component;
