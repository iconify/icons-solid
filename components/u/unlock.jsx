import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nziymmjan.css';
import '../../css/e/ej3cr6b9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="nziymmjan"/><path class="ej3cr6b9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:unlock"} {...others} />);
}

export default Component;
