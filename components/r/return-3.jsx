import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gr_ppjnsm.css';
import '../../css/v/vd8wyfo5l.css';
import '../../css/y/yg9lh6u2m.css';
import '../../css/q/qf-mibb9m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gr_ppjnsm"/><path class="vd8wyfo5l"/><path class="yg9lh6u2m"/><path class="qf-mibb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:return-3"} {...others} />);
}

export default Component;
