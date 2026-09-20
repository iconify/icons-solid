import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pumb42b6l.css';
import '../../css/y/yl3hz14bt.css';
import '../../css/x/xmntywhuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pumb42b6l"/><circle class="yl3hz14bt"/><path class="xmntywhuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:photo-multiple"} {...others} />);
}

export default Component;
