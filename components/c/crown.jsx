import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0s_u7b1z.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="u0s_u7b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:crown"} {...others} />);
}

export default Component;
