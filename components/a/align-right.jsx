import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/ryhle7qrl.css';
import '../../css/a/aa2jaubia.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ryhle7qrl"/><path class="aa2jaubia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-right"} {...others} />);
}

export default Component;
