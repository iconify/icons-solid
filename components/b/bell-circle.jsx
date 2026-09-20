import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz6n8fgjv.css';
import '../../css/t/t-g9ozbrz.css';
import '../../css/i/iu1-c9-ga.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="uz6n8fgjv"/><path clip-rule="evenodd" class="t-g9ozbrz"/><path class="iu1-c9-ga"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:bell-circle"} {...others} />);
}

export default Component;
