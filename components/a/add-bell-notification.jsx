import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s-2ens4al.css';
import '../../css/v/vjk9envcy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s-2ens4al"/><path class="vjk9envcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:add-bell-notification"} {...others} />);
}

export default Component;
