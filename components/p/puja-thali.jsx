import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/asz7s6bbd.css';
import '../../css/z/zs1-uybsu.css';
import '../../css/b/b-l7f6bzq.css';
import '../../css/q/qonvei8yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="asz7s6bbd wm-k"/><path class="wm-a zs1-uybsu"/><path class="b-l7f6bzq"/><path class="qonvei8yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:puja-thali"} {...others} />);
}

export default Component;
