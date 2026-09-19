import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u5kw-wxio.css';
import '../../css/n/n1n4jbu1l.css';
import '../../css/z/zoeq60bqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="u5kw-wxio"/><path class="n1n4jbu1l"/><path class="zoeq60bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:buy"} {...others} />);
}

export default Component;
