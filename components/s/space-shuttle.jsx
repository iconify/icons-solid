import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_-p3bvlv.css';

const viewBox = {"width":2176,"height":1408};
const content = `<path class="j_-p3bvlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:space-shuttle"} {...others} />);
}

export default Component;
