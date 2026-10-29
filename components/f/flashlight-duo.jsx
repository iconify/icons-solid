import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ps73y_alv.css';
import '../../css/a/a5neubxnb.css';
import '../../css/n/n4ra6qb5a.css';
import '../../css/h/h4uzyibtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ps73y_alv"/><path class="a5neubxnb wm-s"/><path class="n4ra6qb5a"/><path class="h4uzyibtm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flashlight-duo"} {...others} />);
}

export default Component;
