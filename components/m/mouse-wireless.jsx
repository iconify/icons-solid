import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tc_5uz-dz.css';
import '../../css/x/x9r49bbjr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tc_5uz-dz"/><path class="x9r49bbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mouse-wireless"} {...others} />);
}

export default Component;
