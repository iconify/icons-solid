import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/qhq7cebcv.css';
import '../../css/v/vhgc4ioby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="qhq7cebcv"/><path class="vhgc4ioby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:octagram-shape"} {...others} />);
}

export default Component;
