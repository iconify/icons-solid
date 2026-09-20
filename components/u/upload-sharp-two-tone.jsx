import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rwjzogb5q.css';
import '../../css/p/p3xqt9u1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="rwjzogb5q"/><path class="p3xqt9u1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:upload-sharp-two-tone"} {...others} />);
}

export default Component;
