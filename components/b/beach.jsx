import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vyj9x15ve.css';
import '../../css/g/ghtpa-b1r.css';
import '../../css/q/q1dg1vu0c.css';
import '../../css/w/w5wgx-lqd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="vyj9x15ve"/><path class="ghtpa-b1r"/><path class="q1dg1vu0c"/><path class="w5wgx-lqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:beach"} {...others} />);
}

export default Component;
