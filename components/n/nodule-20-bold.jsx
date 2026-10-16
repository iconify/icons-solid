import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8pk9obri.css';
import '../../css/e/eepyewbvn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t8pk9obri"/><path class="eepyewbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nodule-20-bold"} {...others} />);
}

export default Component;
