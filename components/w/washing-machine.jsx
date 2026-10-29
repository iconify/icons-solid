import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s3bjvdjgt.css';
import '../../css/i/i29ijccji.css';
import '../../css/h/ha45umb7u.css';
import '../../css/w/w2n_5zeis.css';
import '../../css/w/w45aybjog.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="s3bjvdjgt wm-shadow"/><path class="i29ijccji"/><path class="ha45umb7u"/><path class="w2n_5zeis"/><path class="w45aybjog wm-shine"/><path class="v58hby3rh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:washing-machine"} {...others} />);
}

export default Component;
