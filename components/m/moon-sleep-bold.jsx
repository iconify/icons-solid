import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qazllkbmt.css';
import '../../css/i/ind715bsx.css';
import '../../css/w/wh3ud5bbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qazllkbmt"/><path class="ind715bsx"/><path class="wh3ud5bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-sleep-bold"} {...others} />);
}

export default Component;
