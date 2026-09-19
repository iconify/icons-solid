import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty2npnbqw.css';
import '../../css/g/gkeer5b_h.css';
import '../../css/b/bk4lkpblv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ty2npnbqw"/><path class="gkeer5b_h"/><path class="bk4lkpblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-1-duo"} {...others} />);
}

export default Component;
