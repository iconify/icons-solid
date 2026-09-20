import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nj_0r4jvq.css';
import '../../css/l/lyzquwbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nj_0r4jvq"/><path class="lyzquwbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hourglass"} {...others} />);
}

export default Component;
