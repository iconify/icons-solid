import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/busg1jzlv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="busg1jzlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:sack-xmark"} {...others} />);
}

export default Component;
