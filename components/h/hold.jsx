import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yzz3ksnvr.css';
import '../../css/y/y7bzc5ior.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yzz3ksnvr"/><path class="y7bzc5ior"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hold"} {...others} />);
}

export default Component;
