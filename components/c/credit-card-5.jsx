import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gil2yfb_x.css';
import '../../css/b/b36_fz8rd.css';
import '../../css/x/xm0r4go8l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="gil2yfb_x"/><path class="b36_fz8rd"/><path class="xm0r4go8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:credit-card-5"} {...others} />);
}

export default Component;
