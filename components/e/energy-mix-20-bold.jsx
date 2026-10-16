import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdest5b8f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdest5b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-mix-20-bold"} {...others} />);
}

export default Component;
