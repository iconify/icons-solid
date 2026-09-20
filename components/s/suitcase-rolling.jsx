import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d3qeb45wv.css';
import '../../css/u/uve11ob9q.css';
import '../../css/r/r79o3n11u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d3qeb45wv"/><path class="uve11ob9q"/><path class="r79o3n11u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:suitcase-rolling"} {...others} />);
}

export default Component;
