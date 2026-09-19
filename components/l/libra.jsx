import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qifg3hudd.css';
import '../../css/y/y7cj8cboo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="qifg3hudd"/><path class="y7cj8cboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:libra"} {...others} />);
}

export default Component;
