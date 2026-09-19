import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0trdezov.css';
import '../../css/r/rbpvzg8-g.css';
import '../../css/j/jcog3sb1t.css';
import '../../css/z/z_13fubow.css';
import '../../css/t/tefstla7l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="a0trdezov"/><path class="rbpvzg8-g"/><path class="jcog3sb1t"/><path class="z_13fubow"/><path class="tefstla7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-front-bold"} {...others} />);
}

export default Component;
