import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azaw88ucy.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/p/pu6dnmbwe.css';
import '../../css/v/v61f6f-xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="azaw88ucy"/><path class="d3y9mw6db"/><path class="pu6dnmbwe wm-a"/><path class="v61f6f-xq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-afro"} {...others} />);
}

export default Component;
