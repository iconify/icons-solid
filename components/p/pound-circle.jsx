import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/di28f0bkm.css';
import '../../css/m/moxwhybng.css';
import '../../css/t/t1yga-iwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="di28f0bkm"/><path class="moxwhybng"/><path class="t1yga-iwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pound-circle"} {...others} />);
}

export default Component;
