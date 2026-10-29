import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mlseaq_9y.css';
import '../../css/n/nc2ocdcki.css';
import '../../css/b/bctk01n4u.css';
import '../../css/h/hi4--db3d.css';
import '../../css/f/fjue2dbzu.css';
import '../../css/h/hmlpleb6n.css';
import '../../css/t/tbdzeabsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="mlseaq_9y wm-shadow"/><path class="nc2ocdcki"/><path class="bctk01n4u"/><path class="hi4--db3d"/><path class="fjue2dbzu"/><path class="hmlpleb6n wm-shine"/><path class="tbdzeabsq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hourglass"} {...others} />);
}

export default Component;
