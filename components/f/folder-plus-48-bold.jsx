import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrw5zccqv.css';
import '../../css/f/fdnc673tk.css';
import '../../css/w/wa61dab_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vrw5zccqv"/><path class="fdnc673tk"/><path class="wa61dab_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-plus-48-bold"} {...others} />);
}

export default Component;
