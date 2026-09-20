import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n-ybl64df.css';
import '../../css/z/z8nk98e7m.css';
import '../../css/x/x1h4rj7-j.css';
import '../../css/o/oerb9zjhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n-ybl64df"/><path class="z8nk98e7m"/><path class="x1h4rj7-j"/><path class="oerb9zjhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:class-lesson"} {...others} />);
}

export default Component;
