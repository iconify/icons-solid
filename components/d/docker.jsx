import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkfj4hbnr.css';
import '../../css/x/xcb-gpijo.css';
import '../../css/r/rktspef3f.css';
import '../../css/y/ys57o7bto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkfj4hbnr"/><path class="xcb-gpijo"/><rect class="rktspef3f"/><path class="ys57o7bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:docker"} {...others} />);
}

export default Component;
