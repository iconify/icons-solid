import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3kia3bfa.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ierhiyeae.css';
import '../../css/v/v5olnqn0u.css';
import '../../css/f/fj-rte67q.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hi6eg5brd.css';
import '../../css/f/fo7yocble.css';
import '../../css/t/thqzej5dk.css';
import '../../css/c/cg9mueewk.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOLKWeA1q" class="o3kia3bfa"/></defs><g class="t_2lkqbxb"><path class="ierhiyeae wm-shadow"/><path class="v5olnqn0u"/><path class="fj-rte67q"/><use href="#SVGOLKWeA1q" class="d2kvgvbvc"/><path class="hi6eg5brd"/><use href="#SVGOLKWeA1q" class="d2kvgvbvc"/><path class="fo7yocble"/><path class="thqzej5dk"/><path class="cg9mueewk wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:telescope"} {...others} />);
}

export default Component;
