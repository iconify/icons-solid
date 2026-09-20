import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyrom897p.css';
import '../../css/f/frz88sb3c.css';
import '../../css/p/pzpxu1d8p.css';
import '../../css/m/mvi55m3si.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jyrom897p"/><path class="frz88sb3c"/><path class="pzpxu1d8p"/><path class="mvi55m3si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fruit-banana"} {...others} />);
}

export default Component;
