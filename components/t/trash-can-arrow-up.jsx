import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1h5u9bee.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="u1h5u9bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:trash-can-arrow-up"} {...others} />);
}

export default Component;
