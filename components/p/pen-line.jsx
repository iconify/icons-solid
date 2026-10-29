import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlkyi4_ru.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j18apbf3r.css';
import '../../css/v/vvvzrlnca.css';
import '../../css/p/p-vr-zbso.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o4-ubm9yu.css';
import '../../css/y/ynzomd9cp.css';
import '../../css/o/ooyg-0kay.css';
import '../../css/f/fyncz8bga.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG5CTUzc4N" class="xlkyi4_ru"/></defs><g class="t_2lkqbxb"><path class="j18apbf3r wm-shadow"/><path class="vvvzrlnca"/><path class="p-vr-zbso"/><use href="#SVG5CTUzc4N" class="d2kvgvbvc"/><path class="o4-ubm9yu"/><use href="#SVG5CTUzc4N" class="d2kvgvbvc"/><path class="ynzomd9cp"/><path class="ooyg-0kay wm-shine"/><path class="fyncz8bga wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pen-line"} {...others} />);
}

export default Component;
