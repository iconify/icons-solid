import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y69yz0bvp.css';
import '../../css/b/b9tupzbbc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y69yz0bvp"/><path class="b9tupzbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-20"} {...others} />);
}

export default Component;
