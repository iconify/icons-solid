import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq6j9o11h.css';
import '../../css/c/czssrseqz.css';
import '../../css/s/ss0-xmbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pq6j9o11h"/><path clip-rule="evenodd" class="czssrseqz"/><path class="ss0-xmbxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tower"} {...others} />);
}

export default Component;
