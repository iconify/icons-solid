import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/i7n0v-d0q.css';
import '../../css/q/q9ez6ybik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="i7n0v-d0q"/><path class="q9ez6ybik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-cursor-1"} {...others} />);
}

export default Component;
