import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cw5wiywyu.css';
import '../../css/j/j9hg1or3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cw5wiywyu"/><path class="j9hg1or3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tower"} {...others} />);
}

export default Component;
