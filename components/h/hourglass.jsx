import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/anqhr6b6d.css';
import '../../css/p/pif7w1bsh.css';
import '../../css/c/cp1a-t86s.css';
import '../../css/d/dbaetmxnx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="anqhr6b6d"/><path class="pif7w1bsh"/><path class="cp1a-t86s"/><path class="dbaetmxnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hourglass"} {...others} />);
}

export default Component;
