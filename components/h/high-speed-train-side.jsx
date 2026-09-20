import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c0rjf9bvl.css';
import '../../css/y/yjafq1-8s.css';
import '../../css/d/dqin9zk9a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="c0rjf9bvl"/><path class="yjafq1-8s"/><path class="dqin9zk9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:high-speed-train-side"} {...others} />);
}

export default Component;
