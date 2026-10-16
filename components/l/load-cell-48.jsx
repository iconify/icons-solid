import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz1cr6bmp.css';
import '../../css/t/tvqb9tb9q.css';
import '../../css/f/fm68w8yya.css';
import '../../css/f/fonho850d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pz1cr6bmp"/><path class="tvqb9tb9q"/><path class="fm68w8yya"/><path class="fonho850d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-cell-48"} {...others} />);
}

export default Component;
