import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/beu9ed8lh.css';
import '../../css/k/ktbh9sb3d.css';
import '../../css/f/ft1jp-l6g.css';
import '../../css/a/a3je19_hn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="beu9ed8lh"/><circle class="ktbh9sb3d"/><path class="ft1jp-l6g"/><path class="a3je19_hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:remote-control"} {...others} />);
}

export default Component;
