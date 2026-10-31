import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syhkqfamu.css';
import '../../css/e/e9yts26gn.css';
import '../../css/i/ibh825bhe.css';
import '../../css/c/c5vcbjbxv.css';
import '../../css/o/op21jskum.css';
import '../../css/s/spfrw6b7s.css';
import '../../css/j/juh8bvbho.css';
import '../../css/n/ncuaclbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="syhkqfamu wm-shadow"/><path class="e9yts26gn"/><path class="ibh825bhe"/><path class="c5vcbjbxv"/><path class="op21jskum"/><path class="spfrw6b7s"/><path class="juh8bvbho"/><path class="ncuaclbgg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:git-fork"} {...others} />);
}

export default Component;
