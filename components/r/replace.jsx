import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vxkd0ob2y.css';
import '../../css/y/yv_-r3b7m.css';
import '../../css/j/jr_wnwbql.css';
import '../../css/l/lz-ixv2jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vxkd0ob2y wm-shadow"/><path class="wm-shadow yv_-r3b7m"/><path class="jr_wnwbql"/><path class="lz-ixv2jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:replace"} {...others} />);
}

export default Component;
