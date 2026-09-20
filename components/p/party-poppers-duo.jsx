import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/b/b6utg7pca.css';
import '../../css/o/o-d3avbmq.css';
import '../../css/r/ruq7m0b3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="b6utg7pca"/><path class="o-d3avbmq"/><path clip-rule="evenodd" class="ruq7m0b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:party-poppers-duo"} {...others} />);
}

export default Component;
