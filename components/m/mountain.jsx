import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4yq6cc6d.css';
import '../../css/q/q3y4njx8r.css';
import '../../css/w/wgdwuab-i.css';
import '../../css/h/hodo24pvk.css';
import '../../css/u/uuapkibtt.css';
import '../../css/f/fktdalw_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x4yq6cc6d"/><path class="q3y4njx8r"/><path class="wgdwuab-i"/><path class="hodo24pvk"/><path class="uuapkibtt wm-shine"/><path class="fktdalw_g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mountain"} {...others} />);
}

export default Component;
