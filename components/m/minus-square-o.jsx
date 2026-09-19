import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5c_j2bey.css';

const viewBox = {"width":1408,"height":1408};
const content = `<path class="c5c_j2bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:minus-square-o"} {...others} />);
}

export default Component;
