import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8o7fhn4h.css';
import '../../css/p/pnrbgxb5c.css';
import '../../css/k/k6q1i4brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z8o7fhn4h"/><path class="pnrbgxb5c wm-a"/><path class="k6q1i4brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:broom-duo"} {...others} />);
}

export default Component;
