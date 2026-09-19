import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiku1ubyk.css';
import '../../css/j/j4ddls3pg.css';
import '../../css/u/usc9usasy.css';
import '../../css/o/ol7atxuqp.css';
import '../../css/k/kbvt16cdf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oiku1ubyk"/><path class="j4ddls3pg"/><path class="usc9usasy"/><path class="ol7atxuqp"/><path class="kbvt16cdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:album-collection"} {...others} />);
}

export default Component;
