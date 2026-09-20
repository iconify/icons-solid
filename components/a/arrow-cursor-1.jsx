import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jnntlqc4g.css';
import '../../css/s/saa4e3bia.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jnntlqc4g"/><path class="saa4e3bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-cursor-1"} {...others} />);
}

export default Component;
