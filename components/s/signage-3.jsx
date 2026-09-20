import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vs85j8bpz.css';
import '../../css/t/t3vddeb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vs85j8bpz"/><path class="t3vddeb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:signage-3"} {...others} />);
}

export default Component;
