import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iybzqqbxo.css';
import '../../css/g/g4708uo1b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iybzqqbxo"/><path class="g4708uo1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:icicles-20"} {...others} />);
}

export default Component;
