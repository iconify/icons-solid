import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt8f-3eoh.css';
import '../../css/q/qruqcigga.css';
import '../../css/q/qll7tub0t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dt8f-3eoh"/><path class="qruqcigga"/><path class="qll7tub0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-cog-20-bold"} {...others} />);
}

export default Component;
