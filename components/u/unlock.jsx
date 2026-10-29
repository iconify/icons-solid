import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l1s8gobzn.css';
import '../../css/b/b86buo32x.css';
import '../../css/k/ki55z6ilg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l1s8gobzn wm-a"/><path class="b86buo32x"/><path class="ki55z6ilg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlock"} {...others} />);
}

export default Component;
