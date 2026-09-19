import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8c55jjuz.css';
import '../../css/b/bx91jnigp.css';
import '../../css/m/m75sr8b7y.css';
import '../../css/v/v5wqwnbzp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h8c55jjuz"/><path class="bx91jnigp"/><path class="m75sr8b7y"/><path class="v5wqwnbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:disc"} {...others} />);
}

export default Component;
