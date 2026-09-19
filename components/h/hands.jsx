import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e9uruk8bl.css';
import '../../css/z/z7xy-3w1r.css';
import '../../css/v/v1phh24wk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="e9uruk8bl"/><path class="z7xy-3w1r"/><path class="v1phh24wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hands"} {...others} />);
}

export default Component;
