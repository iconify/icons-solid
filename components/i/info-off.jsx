import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/x/x22nze58s.css';
import '../../css/r/rfwxiqbdb.css';
import '../../css/m/mnrsv1eny.css';
import '../../css/v/vk1wzd-us.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="x22nze58s"/><path class="rfwxiqbdb"/></g><path clip-rule="evenodd" class="mnrsv1eny"/><path class="vk1wzd-us"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:info-off"} {...others} />);
}

export default Component;
