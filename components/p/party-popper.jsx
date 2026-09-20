import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/schr631qs.css';
import '../../css/q/qshu-ubma.css';
import '../../css/a/aple9obvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="schr631qs"/><path class="qshu-ubma"/><path class="aple9obvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:party-popper"} {...others} />);
}

export default Component;
