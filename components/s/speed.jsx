import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mm0oaabax.css';
import '../../css/b/beraasbar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mm0oaabax"/><path class="beraasbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:speed"} {...others} />);
}

export default Component;
