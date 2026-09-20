import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkfdg3zno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wkfdg3zno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scuttle-dark"} {...others} />);
}

export default Component;
