import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9ol47byu.css';
import '../../css/n/n5-8jdgvs.css';
import '../../css/m/m7cme73nv.css';
import '../../css/j/j8qsfsb3d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w9ol47byu"/><path class="n5-8jdgvs"/><path class="m7cme73nv"/><path class="j8qsfsb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:kick-scooter-bold"} {...others} />);
}

export default Component;
