import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu20-2boz.css';
import '../../css/s/snl0_-vqu.css';
import '../../css/j/jurtbe_bx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xu20-2boz"/><path class="snl0_-vqu"/><path class="jurtbe_bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-output-20-bold"} {...others} />);
}

export default Component;
