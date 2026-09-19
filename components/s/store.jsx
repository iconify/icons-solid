import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcqw5_n6v.css';
import '../../css/a/ajgo2cucn.css';
import '../../css/x/x406fxb-a.css';
import '../../css/e/e7o8ilbbs.css';
import '../../css/w/wbw8jccez.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bcqw5_n6v"/><path clip-rule="evenodd" class="ajgo2cucn"/><path class="x406fxb-a"/><path clip-rule="evenodd" class="e7o8ilbbs"/><path class="wbw8jccez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:store"} {...others} />);
}

export default Component;
