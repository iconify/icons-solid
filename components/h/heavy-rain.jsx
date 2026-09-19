import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/e/e8rqw668u.css';
import '../../css/l/la-m96hrc.css';
import '../../css/s/s5iu1qo5l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="e8rqw668u"/><path class="la-m96hrc"/><path class="s5iu1qo5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:heavy-rain"} {...others} />);
}

export default Component;
