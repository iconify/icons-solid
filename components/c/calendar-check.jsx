import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g70z56b6i.css';
import '../../css/w/wqj33hb5g.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="g70z56b6i"/><path class="wqj33hb5g"/><path class="zggadzblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:calendar-check"} {...others} />);
}

export default Component;
