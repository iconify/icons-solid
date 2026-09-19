import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yv-u3gr2g.css';
import '../../css/m/mdfd69mwt.css';
import '../../css/q/q41v6geqj.css';
import '../../css/m/m-2iqioyf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="yv-u3gr2g"/><path class="mdfd69mwt"/><path class="q41v6geqj"/><path class="m-2iqioyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:screenshot"} {...others} />);
}

export default Component;
