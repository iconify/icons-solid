import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d44p8wv5z.css';
import '../../css/t/tb4t4kb9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d44p8wv5z"/><path class="tb4t4kb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ore-20"} {...others} />);
}

export default Component;
