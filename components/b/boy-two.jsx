import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/u/ugungrqzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="ugungrqzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boy-two"} {...others} />);
}

export default Component;
