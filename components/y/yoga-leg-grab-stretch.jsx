import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fts6byooi.css';
import '../../css/k/k5fsoqbdz.css';
import '../../css/x/xmwpgbjjr.css';
import '../../css/j/jkfoczbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fts6byooi"/><path class="k5fsoqbdz"/><path class="xmwpgbjjr"/><path class="jkfoczbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:yoga-leg-grab-stretch"} {...others} />);
}

export default Component;
