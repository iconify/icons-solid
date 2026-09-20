import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/o7kjqcb3m.css';
import '../../css/u/uu1mu9b1q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="o7kjqcb3m"/><path class="uu1mu9b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ipad-tablet-screen"} {...others} />);
}

export default Component;
