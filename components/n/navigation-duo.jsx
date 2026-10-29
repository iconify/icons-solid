import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rb99euolt.css';
import '../../css/q/qbtperb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rb99euolt"/><path class="qbtperb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-duo"} {...others} />);
}

export default Component;
