import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixcl-v7ys.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ixcl-v7ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frequency-20-bold"} {...others} />);
}

export default Component;
