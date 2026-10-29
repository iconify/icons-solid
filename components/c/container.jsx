import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b43u7vb1d.css';
import '../../css/b/bhe0ybcvt.css';
import '../../css/x/xhn2ytbsr.css';
import '../../css/s/sdh6_i4nc.css';
import '../../css/e/eeh5yoz5p.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b43u7vb1d wm-shadow"/><path class="bhe0ybcvt"/><path class="xhn2ytbsr"/><path class="sdh6_i4nc"/><path class="eeh5yoz5p wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:container"} {...others} />);
}

export default Component;
