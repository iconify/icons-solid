import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/v0lxn1b9c.css';
import '../../css/a/asl6e5bkh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="v0lxn1b9c"/><path class="asl6e5bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:broken-link-2"} {...others} />);
}

export default Component;
