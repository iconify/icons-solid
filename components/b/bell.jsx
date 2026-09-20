import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rkbitbb0u.css';
import '../../css/v/v9wvumb_x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="rkbitbb0u"/><path class="v9wvumb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bell"} {...others} />);
}

export default Component;
