import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k94jl6vfx.css';
import '../../css/a/ayj3gb6gy.css';
import '../../css/l/lk_m0yl0m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="k94jl6vfx"/><path class="ayj3gb6gy"/><path class="lk_m0yl0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:share-one"} {...others} />);
}

export default Component;
