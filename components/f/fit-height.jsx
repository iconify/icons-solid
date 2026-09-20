import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/q-8snxl6g.css';
import '../../css/y/y-fas1b5f.css';
import '../../css/d/djj-dackn.css';
import '../../css/d/duavt6vzq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="q-8snxl6g"/><path class="y-fas1b5f"/><path class="djj-dackn"/><path class="duavt6vzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fit-height"} {...others} />);
}

export default Component;
