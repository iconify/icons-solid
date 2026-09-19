import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/glrfvfvss.css';
import '../../css/l/l-tj_lb7g.css';
import '../../css/z/zctcw55nb.css';
import '../../css/s/swtvqgbvf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="glrfvfvss"/><path class="l-tj_lb7g"/><path class="zctcw55nb"/><path class="swtvqgbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-of-david-duo"} {...others} />);
}

export default Component;
