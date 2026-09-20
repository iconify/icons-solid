import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3_3rlbpo.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="g3_3rlbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:leftmost"} {...others} />);
}

export default Component;
