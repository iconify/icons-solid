import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgkeeod2i.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="dgkeeod2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:globe-africa"} {...others} />);
}

export default Component;
