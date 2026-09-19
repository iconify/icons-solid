import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/v/vqj6j6upz.css';
import '../../css/w/www_habqm.css';
import '../../css/y/yufnd7b4z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="vqj6j6upz"/><path class="www_habqm"/><path class="yufnd7b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-duo"} {...others} />);
}

export default Component;
