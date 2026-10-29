import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y77zh3i2c.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oif6i7b2r.css';
import '../../css/q/qw3r0mb4j.css';
import '../../css/z/z8y4rjtwj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z-vqlfvsl.css';
import '../../css/x/x7gsuzppo.css';
import '../../css/f/f6z1h1bew.css';
import '../../css/y/y7ndy2bec.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGq8T92cRh" class="y77zh3i2c"/></defs><g class="t_2lkqbxb"><path class="oif6i7b2r wm-shadow"/><path class="qw3r0mb4j"/><path class="z8y4rjtwj"/><use href="#SVGq8T92cRh" class="d2kvgvbvc"/><path class="z-vqlfvsl"/><use href="#SVGq8T92cRh" class="d2kvgvbvc"/><path class="x7gsuzppo"/><path class="f6z1h1bew wm-shine"/><path class="wm-deco y7ndy2bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:trash"} {...others} />);
}

export default Component;
