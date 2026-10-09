import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p169fcb-f.css';
import '../../css/z/z26u7ebdk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p169fcb-f"/><path class="z26u7ebdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-rod-20-bold"} {...others} />);
}

export default Component;
