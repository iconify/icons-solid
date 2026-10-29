import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/ail_c82xv.css';
import '../../css/u/u73bqib5t.css';
import '../../css/t/tv19w33-n.css';
import '../../css/g/gi9n3hd1w.css';
import '../../css/n/n3nh-9bvf.css';
import '../../css/h/h4-425b0k.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ail_c82xv wm-shadow"/><path class="u73bqib5t"/><path class="tv19w33-n"/><path class="gi9n3hd1w"/><path class="n3nh-9bvf"/><path class="h4-425b0k wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:water-balloon"} {...others} />);
}

export default Component;
