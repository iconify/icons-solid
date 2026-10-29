import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7s9w8b_e.css';
import '../../css/j/jjo3t6bpq.css';
import '../../css/b/bbf80ib2m.css';
import '../../css/i/i3cicmb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v7s9w8b_e"/><path class="jjo3t6bpq wm-a"/><path class="bbf80ib2m"/><path class="i3cicmb7p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-balloon-duo"} {...others} />);
}

export default Component;
