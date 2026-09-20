import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pjbopmuxt.css';
import '../../css/r/r1hvppbvs.css';
import '../../css/x/xjdn1v73o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pjbopmuxt"/><path class="r1hvppbvs"/><path class="xjdn1v73o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ticket-1"} {...others} />);
}

export default Component;
