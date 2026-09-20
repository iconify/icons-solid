import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ytpthob6n.css';
import '../../css/i/i1-x9ubvc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ytpthob6n"/><path class="i1-x9ubvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:battery-charging"} {...others} />);
}

export default Component;
