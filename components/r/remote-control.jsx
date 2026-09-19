import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/beu9ed8lh.css';
import '../../css/k/ktbh9sb3d.css';
import '../../css/c/c29zywcqy.css';
import '../../css/e/e6pgh-soq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="beu9ed8lh"/><circle class="ktbh9sb3d"/><rect class="c29zywcqy"/><path class="e6pgh-soq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:remote-control"} {...others} />);
}

export default Component;
