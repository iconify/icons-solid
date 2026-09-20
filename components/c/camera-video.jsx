import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/z57epd52t.css';
import '../../css/q/qdcm0hb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="z57epd52t"/><path class="qdcm0hb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:camera-video"} {...others} />);
}

export default Component;
