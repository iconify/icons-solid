import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bcpge37zx.css';
import '../../css/z/zrxjnzbuz.css';
import '../../css/v/v7v_u0jql.css';
import '../../css/i/ie_33mcru.css';
import '../../css/p/pc6eh-ilv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bcpge37zx"/><path class="zrxjnzbuz"/><path class="v7v_u0jql wm-a"/><path class="ie_33mcru"/><path class="pc6eh-ilv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dog-duo"} {...others} />);
}

export default Component;
