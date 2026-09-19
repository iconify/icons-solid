import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/u5o9i0gce.css';
import '../../css/a/ax-9rgjso.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="u5o9i0gce"/><path class="ax-9rgjso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-sent"} {...others} />);
}

export default Component;
