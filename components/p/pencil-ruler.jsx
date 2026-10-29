import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w7x-w78gs.css';
import '../../css/s/sq0akbbyk.css';
import '../../css/y/ymk1gwbhn.css';
import '../../css/e/ev9flfynh.css';
import '../../css/g/gbtfqg58b.css';
import '../../css/f/f3g1inb8b.css';
import '../../css/e/e4f-cxb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w7x-w78gs wm-shadow"/><path class="sq0akbbyk"/><path class="ymk1gwbhn"/><path class="ev9flfynh"/><path class="gbtfqg58b"/><path class="f3g1inb8b wm-shine"/><path class="e4f-cxb6p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pencil-ruler"} {...others} />);
}

export default Component;
