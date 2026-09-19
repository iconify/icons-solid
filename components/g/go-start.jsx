import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/knf3rvd3j.css';
import '../../css/d/dr-virjkz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="knf3rvd3j"/><path class="dr-virjkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:go-start"} {...others} />);
}

export default Component;
