import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fr8kns7oi.css';
import '../../css/r/r24ndllyp.css';
import '../../css/j/jr2950bfp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fr8kns7oi"/><path class="r24ndllyp"/><path class="jr2950bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-1-duo"} {...others} />);
}

export default Component;
