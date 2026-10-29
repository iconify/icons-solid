import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/q/qj05ho46r.css';
import '../../css/x/xsnyx0v1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d1xkg3smp"/><path class="qj05ho46r"/><path class="wm-a xsnyx0v1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bee"} {...others} />);
}

export default Component;
