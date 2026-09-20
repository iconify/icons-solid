import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhy5ubc7h.css';
import '../../css/w/wkndhebik.css';
import '../../css/o/oca4bq-1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dhy5ubc7h"/><path class="wkndhebik"/><path class="oca4bq-1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:wifi-expressive"} {...others} />);
}

export default Component;
