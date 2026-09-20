import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f87cbjbow.css';
import '../../css/c/c4plcac6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f87cbjbow"/><path class="c4plcac6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:flash-1"} {...others} />);
}

export default Component;
