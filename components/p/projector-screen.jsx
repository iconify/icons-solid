import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gec6rjqza.css';
import '../../css/g/gcj-4k1bt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="gec6rjqza"/><path class="gcj-4k1bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:projector-screen"} {...others} />);
}

export default Component;
