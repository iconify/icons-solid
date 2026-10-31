import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z8f4myjok.css';
import '../../css/i/i08q-ccay.css';
import '../../css/n/nme2jixrh.css';
import '../../css/i/ibhxvhbno.css';
import '../../css/x/xlcf7kxxc.css';
import '../../css/b/bj7l9wdqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z8f4myjok"/><path class="i08q-ccay"/><path class="nme2jixrh"/><path class="ibhxvhbno"/><path class="wm-s xlcf7kxxc"/><path class="bj7l9wdqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:jack-o-lantern"} {...others} />);
}

export default Component;
