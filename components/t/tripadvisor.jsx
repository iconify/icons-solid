import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qux8kuy1s.css';

const viewBox = {"width":2304,"height":1408};
const content = `<path class="qux8kuy1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:tripadvisor"} {...others} />);
}

export default Component;
