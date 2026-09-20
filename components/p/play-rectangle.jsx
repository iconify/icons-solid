import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh7upse8n.css';
import '../../css/z/z-jhzydsn.css';
import '../../css/w/w2qx0zb0u.css';
import '../../css/o/ozwwbac2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rh7upse8n"/><path class="z-jhzydsn"/><path class="w2qx0zb0u"/><path class="ozwwbac2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-rectangle"} {...others} />);
}

export default Component;
