import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt_9d4b_y.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="lt_9d4b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:road"} {...others} />);
}

export default Component;
