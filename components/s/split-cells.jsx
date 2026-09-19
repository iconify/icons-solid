import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/q3kp-xbuy.css';
import '../../css/u/ujl-q6utp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="q3kp-xbuy"/><path class="ujl-q6utp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:split-cells"} {...others} />);
}

export default Component;
