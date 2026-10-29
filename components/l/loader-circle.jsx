import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4xr3bbwi.css';
import '../../css/z/zvhid3bjr.css';
import '../../css/m/mis7vx5md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4xr3bbwi wm-k"/><path class="wm-k zvhid3bjr"/><path class="mis7vx5md wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:loader-circle"} {...others} />);
}

export default Component;
