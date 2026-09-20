import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlgjvjvel.css';
import '../../css/l/l45iarbss.css';
import '../../css/u/uw9kubtnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hlgjvjvel"/><path class="l45iarbss"/><path class="uw9kubtnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:page-tab"} {...others} />);
}

export default Component;
