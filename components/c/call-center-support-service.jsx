import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lopfipyxu.css';
import '../../css/s/siczk_8ws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lopfipyxu"/><path class="siczk_8ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:call-center-support-service"} {...others} />);
}

export default Component;
