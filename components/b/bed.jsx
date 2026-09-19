import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s55lt5h3d.css';
import '../../css/h/hj5rgkb7i.css';
import '../../css/f/f86ikg2dl.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 5)" class="n1lsf0bnc"><path class="s55lt5h3d"/><ellipse class="hj5rgkb7i"/><path class="f86ikg2dl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bed"} {...others} />);
}

export default Component;
