import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/me3dgg7xk.css';
import '../../css/m/mp8_gtb8l.css';
import '../../css/v/vrs4t5x8c.css';
import '../../css/v/vntch8b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="me3dgg7xk"/><path class="mp8_gtb8l"/><path class="vrs4t5x8c"/><path class="vntch8b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ice-cream-1"} {...others} />);
}

export default Component;
