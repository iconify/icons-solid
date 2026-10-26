import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/c069sbycb.css';
import '../../css/d/d333rm8lz.css';
import '../../css/a/a4vwu3-fb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="c069sbycb"/><path class="d333rm8lz"/><path class="a4vwu3-fb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:fish"} {...others} />);
}

export default Component;
