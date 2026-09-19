import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bj-br9bjw.css';
import '../../css/u/u2lpm3b6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bj-br9bjw"/><path class="u2lpm3b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:symmetry"} {...others} />);
}

export default Component;
