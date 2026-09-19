import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kvnvcfb9m.css';
import '../../css/x/xy97x4bhm.css';
import '../../css/v/v5afgebvr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="kvnvcfb9m"/><path class="xy97x4bhm"/><path class="v5afgebvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cake-four"} {...others} />);
}

export default Component;
