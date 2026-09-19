import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygxrgebqz.css';
import '../../css/y/yts6p_bsd.css';
import '../../css/b/b8-7g1_4e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygxrgebqz"/><ellipse class="yts6p_bsd"/><path class="b8-7g1_4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:coin"} {...others} />);
}

export default Component;
