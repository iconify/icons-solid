import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/c/cdj5e1p9p.css';
import '../../css/a/a2047_bez.css';
import '../../css/g/gn0coqbmw.css';
import '../../css/q/q8995_brv.css';
import '../../css/m/m7w811sll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="cdj5e1p9p"/><path class="a2047_bez"/><path class="gn0coqbmw"/><path class="q8995_brv"/><path class="m7w811sll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder"} {...others} />);
}

export default Component;
