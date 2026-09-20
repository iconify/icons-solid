import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jqm754bde.css';
import '../../css/n/nyi4c566j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jqm754bde"/><path class="nyi4c566j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:radioactive-1"} {...others} />);
}

export default Component;
