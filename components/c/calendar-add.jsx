import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wzm49hbdo.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="wzm49hbdo"/><path class="zggadzblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:calendar-add"} {...others} />);
}

export default Component;
