import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p1m69zryk.css';
import '../../css/e/e7a57_2wy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="p1m69zryk"/><path class="e7a57_2wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:store-2"} {...others} />);
}

export default Component;
