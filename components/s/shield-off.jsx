import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d0h603b-h.css';
import '../../css/g/gzvhj2enz.css';
import '../../css/c/culmy61wa.css';
import '../../css/y/yr0518bys.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d0h603b-h wm-shadow"/><path class="gzvhj2enz wm-shadow"/><path class="culmy61wa"/><path class="yr0518bys"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shield-off"} {...others} />);
}

export default Component;
