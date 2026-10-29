import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zj3dx9b0q.css';
import '../../css/b/b4-i6ebsd.css';
import '../../css/j/jfan9ln6m.css';
import '../../css/g/g-6_-_3ou.css';
import '../../css/g/goq51yb_z.css';
import '../../css/a/akx-62o3t.css';
import '../../css/e/eq00sebfe.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zj3dx9b0q"/><path class="b4-i6ebsd"/><path class="jfan9ln6m"/><path class="g-6_-_3ou"/><path class="goq51yb_z"/><path class="akx-62o3t"/><path class="eq00sebfe wm-shine"/><path class="aj1r45djd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:car"} {...others} />);
}

export default Component;
