import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w34osu__y.css';
import '../../css/g/g2_e28gxf.css';
import '../../css/f/fa-71jbep.css';
import '../../css/i/i8a_669nn.css';
import '../../css/d/d0wy8umck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="w34osu__y"><path class="g2_e28gxf"/><path class="fa-71jbep"/><path class="i8a_669nn"/><path class="d0wy8umck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-cart-search"} {...others} />);
}

export default Component;
