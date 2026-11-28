import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q36e61bjs.css';
import '../../css/n/noi10wr0r.css';
import '../../css/p/pkt7jgc9g.css';
import '../../css/v/v3yuoz4dp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q36e61bjs"/><path class="noi10wr0r"/><path class="pkt7jgc9g"/><path class="v3yuoz4dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:herb"} {...others} />);
}

export default Component;
