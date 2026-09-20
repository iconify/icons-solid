import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/miacov2kx.css';
import '../../css/o/okd5ylurk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="miacov2kx"/><path clip-rule="evenodd" class="okd5ylurk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:reset-clock-flat"} {...others} />);
}

export default Component;
