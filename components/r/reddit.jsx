import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gnvyvzb7w.css';
import '../../css/d/dmr1fbc2t.css';
import '../../css/k/k3e6macyv.css';
import '../../css/q/qni-80b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gnvyvzb7w"/><path class="dmr1fbc2t"/><path class="k3e6macyv"/><path class="qni-80b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:reddit"} {...others} />);
}

export default Component;
