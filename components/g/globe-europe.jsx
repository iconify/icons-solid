import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0mdim-6n.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="e0mdim-6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:globe-europe"} {...others} />);
}

export default Component;
