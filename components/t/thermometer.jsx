import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm1wxvbgx.css';
import '../../css/b/bgkbn9bcb.css';
import '../../css/s/svgyy3wly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hm1wxvbgx"/><path class="bgkbn9bcb"/><path class="svgyy3wly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer"} {...others} />);
}

export default Component;
