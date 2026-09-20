import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/ks8iu3b9c.css';
import '../../css/q/qt9tgmrav.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ks8iu3b9c"/><path class="qt9tgmrav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:balloon"} {...others} />);
}

export default Component;
