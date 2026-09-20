import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w_x5rnf7z.css';
import '../../css/r/rrogs_byq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w_x5rnf7z"/><path class="rrogs_byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-face-id-mask"} {...others} />);
}

export default Component;
