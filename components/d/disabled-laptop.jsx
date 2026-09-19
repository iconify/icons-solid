import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kzx5c9b0m.css';
import '../../css/y/yije3as7n.css';
import '../../css/c/cg5yr93ex.css';
import '../../css/q/qr74q9btr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="kzx5c9b0m"/><path class="yije3as7n"/><circle class="cg5yr93ex"/><path class="qr74q9btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:disabled-laptop"} {...others} />);
}

export default Component;
