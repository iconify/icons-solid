import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3ipoh55s.css';
import '../../css/l/l-9acz8-a.css';
import '../../css/m/mtkygh3tx.css';
import '../../css/z/z5k05abpz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n3ipoh55s"/><path class="l-9acz8-a"/><path clip-rule="evenodd" class="mtkygh3tx"/><path class="z5k05abpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-open-bold"} {...others} />);
}

export default Component;
