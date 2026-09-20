import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u08g8l8eu.css';
import '../../css/l/lit00-b9s.css';
import '../../css/m/m89_ysbai.css';
import '../../css/s/s9i33u8tj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/c/c9k5gmbvw.css';
import '../../css/b/b1vihebby.css';
import '../../css/c/crisc_e8x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u08g8l8eu"/><path class="lit00-b9s"/><path class="m89_ysbai"/><path class="s9i33u8tj"/><g class="ij2x_72vy"><path class="c9k5gmbvw"/><path class="b1vihebby"/><path class="crisc_e8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:boxing-glove"} {...others} />);
}

export default Component;
