import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b1r711bgn.css';
import '../../css/e/ey_h58dyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="b1r711bgn"/><path class="ey_h58dyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wrench-circle"} {...others} />);
}

export default Component;
