import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubs-d4r4c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ubs-d4r4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:chevron-circle-up"} {...others} />);
}

export default Component;
