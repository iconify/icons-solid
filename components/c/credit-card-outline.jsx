import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvum3bja.css';
import '../../css/r/rs8zu5blz.css';
import '../../css/c/czg5n3blq.css';
import '../../css/n/nmfipnb4g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rjvum3bja"/><path clip-rule="evenodd" class="rs8zu5blz"/><path class="czg5n3blq"/><path clip-rule="evenodd" class="nmfipnb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:credit-card-outline"} {...others} />);
}

export default Component;
