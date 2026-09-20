import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s8det0bzb.css';
import '../../css/k/kt1xd4bqg.css';
import '../../css/d/dlqj80b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s8det0bzb"/><path class="kt1xd4bqg"/><path class="dlqj80b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:buttons-all"} {...others} />);
}

export default Component;
