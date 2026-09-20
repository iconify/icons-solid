import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pr758cc-x.css';
import '../../css/y/yv3yf5d7w.css';
import '../../css/t/tqpuzm_se.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pr758cc-x"/><path class="yv3yf5d7w"/><path class="tqpuzm_se"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:leaf"} {...others} />);
}

export default Component;
