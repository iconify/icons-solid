import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/d/dvgxmdblw.css';
import '../../css/l/ld30arbtk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yjvpx8kkv.css';
import '../../css/j/jfzy-rk_q.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="dvgxmdblw"/><path class="ld30arbtk"/></g><g class="ij2x_72vy"><path class="yjvpx8kkv"/><path class="jfzy-rk_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backpack"} {...others} />);
}

export default Component;
