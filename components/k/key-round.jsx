import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9ebv6big.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/u/u3s_svo7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m9ebv6big"/><path class="v7jzlzbxs wm-a"/><path class="u3s_svo7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-round"} {...others} />);
}

export default Component;
