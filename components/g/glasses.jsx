import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wg62rr5oq.css';
import '../../css/w/w1g1irjfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wg62rr5oq"/><path class="w1g1irjfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:glasses"} {...others} />);
}

export default Component;
