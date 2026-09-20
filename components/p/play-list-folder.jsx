import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ymchi-n4a.css';
import '../../css/w/wavo0yb6n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ymchi-n4a"/><path class="wavo0yb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:play-list-folder"} {...others} />);
}

export default Component;
