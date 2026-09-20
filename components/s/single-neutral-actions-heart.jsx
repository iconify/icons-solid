import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uye8a_knn.css';
import '../../css/g/gwzyt040k.css';
import '../../css/u/ub3pscbsu.css';
import '../../css/g/gr8ewcbmx.css';
import '../../css/h/h-xs50ubx.css';
import '../../css/y/yt_eb7h5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uye8a_knn"/><path class="gwzyt040k"/><path class="ub3pscbsu"/><path class="gr8ewcbmx"/><path class="h-xs50ubx"/><path class="yt_eb7h5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-neutral-actions-heart"} {...others} />);
}

export default Component;
