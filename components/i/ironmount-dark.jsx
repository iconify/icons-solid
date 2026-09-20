import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxmzs5b3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hxmzs5b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ironmount-dark"} {...others} />);
}

export default Component;
