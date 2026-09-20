import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk2yh9xdu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xk2yh9xdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tower-observation"} {...others} />);
}

export default Component;
