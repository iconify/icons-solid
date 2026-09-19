import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/g/gp3q-9bcj.css';
import '../../css/y/yvibkqbla.css';
import '../../css/y/yms0hyb2t.css';
import '../../css/j/j3d5ycb4e.css';
import '../../css/d/dmg-7rblv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="gp3q-9bcj"/><path class="yvibkqbla"/><path class="yms0hyb2t"/><path class="j3d5ycb4e"/><path class="dmg-7rblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:luggage"} {...others} />);
}

export default Component;
