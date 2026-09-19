import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/q/qgymvr2-d.css';
import '../../css/y/ytep3bcxs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="qgymvr2-d"/><path class="ytep3bcxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thin"} {...others} />);
}

export default Component;
