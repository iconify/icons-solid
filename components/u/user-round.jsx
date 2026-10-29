import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdep9uclp.css';
import '../../css/l/llhla4bma.css';
import '../../css/b/b8wdyouko.css';
import '../../css/y/ywnjk6bmp.css';
import '../../css/l/lfkgxtb3k.css';
import '../../css/w/wm6fjab7n.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdep9uclp wm-shadow"/><path class="llhla4bma"/><path class="b8wdyouko"/><path class="ywnjk6bmp"/><path class="lfkgxtb3k wm-shine"/><path class="wm-deco wm6fjab7n"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-round"} {...others} />);
}

export default Component;
