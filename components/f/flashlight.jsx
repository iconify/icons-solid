import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n4ra6qb5a.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n4ra6qb5a"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flashlight"} {...others} />);
}

export default Component;
