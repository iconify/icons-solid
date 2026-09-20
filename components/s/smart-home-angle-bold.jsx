import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st9wqpxoy.css';
import '../../css/a/afwe0cb7c.css';
import '../../css/n/nl4g2jbjn.css';
import '../../css/a/asu_8f8hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="st9wqpxoy"/><path class="afwe0cb7c"/><path class="nl4g2jbjn"/><path class="asu_8f8hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-bold"} {...others} />);
}

export default Component;
