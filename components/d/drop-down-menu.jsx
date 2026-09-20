import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/k/k5s120eth.css';
import '../../css/w/wi3428b9q.css';
import '../../css/h/hhgkeq8xm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="k5s120eth"/><path class="wi3428b9q"/><path class="hhgkeq8xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:drop-down-menu"} {...others} />);
}

export default Component;
