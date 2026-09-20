import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3s83n2ce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y3s83n2ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anyappstart-light"} {...others} />);
}

export default Component;
