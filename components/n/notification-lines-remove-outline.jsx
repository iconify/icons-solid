import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0qvmi33m.css';
import '../../css/c/ctcoxd1qn.css';
import '../../css/m/mq1ot8b-j.css';
import '../../css/y/ywkb-_bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d0qvmi33m"/><path class="ctcoxd1qn"/><path class="mq1ot8b-j"/><path class="ywkb-_bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-lines-remove-outline"} {...others} />);
}

export default Component;
