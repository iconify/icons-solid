import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kosp9375q.css';
import '../../css/v/vqomwzb6i.css';
import '../../css/j/jk_3i_j5p.css';
import '../../css/m/md62jhbll.css';
import '../../css/k/k1hnfpb-f.css';
import '../../css/r/ruedlxq7u.css';
import '../../css/w/wn90qvxla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kosp9375q wm-shadow"/><path class="vqomwzb6i"/><path class="jk_3i_j5p"/><path class="md62jhbll"/><path class="k1hnfpb-f"/><path class="ruedlxq7u wm-shine"/><path class="wm-deco wn90qvxla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:circle-check-big"} {...others} />);
}

export default Component;
