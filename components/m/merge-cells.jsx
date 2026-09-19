import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/n/n7i9tqp3s.css';
import '../../css/f/fg0o6ubwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="n7i9tqp3s"/><path class="fg0o6ubwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:merge-cells"} {...others} />);
}

export default Component;
