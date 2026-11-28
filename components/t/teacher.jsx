import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3heq6b6w.css';
import '../../css/i/ip-lweb_e.css';
import '../../css/j/jmt_hp8qh.css';
import '../../css/q/qj4rgrb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n3heq6b6w"/><path class="ip-lweb_e"/><path class="jmt_hp8qh"/><path class="qj4rgrb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:teacher"} {...others} />);
}

export default Component;
