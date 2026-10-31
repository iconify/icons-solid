import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s0fh-2bqx.css';
import '../../css/b/b1e8v9bqo.css';
import '../../css/p/pk4k-ub1g.css';
import '../../css/b/b7klf4bqs.css';
import '../../css/i/ivrd6kbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s0fh-2bqx wm-shadow"/><path class="b1e8v9bqo"/><path class="pk4k-ub1g"/><path class="b7klf4bqs"/><path class="ivrd6kbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:navigation"} {...others} />);
}

export default Component;
