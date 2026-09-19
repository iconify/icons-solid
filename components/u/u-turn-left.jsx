import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/mqowuqbjp.css';
import '../../css/z/zf6nr4d2o.css';
import '../../css/g/g0v9dsb-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="mqowuqbjp"/><path class="zf6nr4d2o"/><circle class="g0v9dsb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:u-turn-left"} {...others} />);
}

export default Component;
