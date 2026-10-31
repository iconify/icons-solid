import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v11c6jlnw.css';
import '../../css/d/dh0935bbc.css';
import '../../css/s/soey5ibpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v11c6jlnw wm-k"/><path class="dh0935bbc wm-shine"/><path class="soey5ibpc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:newspaper"} {...others} />);
}

export default Component;
