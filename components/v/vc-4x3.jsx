import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/ww6ttdayx.css';
import '../../css/h/hw5lht71s.css';
import '../../css/l/l-bihbc4h.css';
import '../../css/v/vs8j3jbaf.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="ww6ttdayx"/><path class="hw5lht71s"/><path class="l-bihbc4h"/><path class="vs8j3jbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:vc-4x3"} {...others} />);
}

export default Component;
