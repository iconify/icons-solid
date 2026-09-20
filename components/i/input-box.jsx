import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v5zx551_x.css';
import '../../css/b/bfswbgf-c.css';
import '../../css/d/djn-xbnjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v5zx551_x"/><path class="bfswbgf-c"/><path class="djn-xbnjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:input-box"} {...others} />);
}

export default Component;
