import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es0whwivz.css';
import '../../css/q/qarj27bdq.css';
import '../../css/r/runk-dmao.css';
import '../../css/i/ive335b6k.css';
import '../../css/y/yxkid29pl.css';
import '../../css/m/mf22-jb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="es0whwivz"/><path class="qarj27bdq"/><path class="runk-dmao"/><path class="ive335b6k"/><path class="yxkid29pl"/><path class="mf22-jb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dentistry-tooth-shield"} {...others} />);
}

export default Component;
