import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bd5jfpbrt.css';
import '../../css/v/v-mt-tn7b.css';
import '../../css/o/oytsreb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bd5jfpbrt"/><path class="v-mt-tn7b"/><path class="oytsreb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-block-02"} {...others} />);
}

export default Component;
