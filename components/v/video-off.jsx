import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qt0vj5e-v.css';
import '../../css/z/zk-rux3bo.css';
import '../../css/a/as_7j1bej.css';
import '../../css/l/lt8rw2lxl.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qt0vj5e-v wm-shadow"/><path class="wm-shadow zk-rux3bo"/><path class="as_7j1bej"/><path class="lt8rw2lxl"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:video-off"} {...others} />);
}

export default Component;
