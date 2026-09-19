import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/to4dkwksy.css';
import '../../css/g/gh2h1q4io.css';
import '../../css/p/pic7lxbxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="to4dkwksy"/><circle class="gh2h1q4io"/><path class="pic7lxbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message-search"} {...others} />);
}

export default Component;
