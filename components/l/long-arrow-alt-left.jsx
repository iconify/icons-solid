import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi0g28_vu.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="zi0g28_vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:long-arrow-alt-left"} {...others} />);
}

export default Component;
