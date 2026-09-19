import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2_a8x_yr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b2_a8x_yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:watson-machine-learning"} {...others} />);
}

export default Component;
