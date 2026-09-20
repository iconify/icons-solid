import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zjaml793l.css';
import '../../css/p/pv851s9pl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zjaml793l"/><path class="pv851s9pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pin-2"} {...others} />);
}

export default Component;
