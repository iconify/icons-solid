import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mm0oaabax.css';
import '../../css/j/j5yw5b7wt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mm0oaabax"/><path class="j5yw5b7wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:speed"} {...others} />);
}

export default Component;
