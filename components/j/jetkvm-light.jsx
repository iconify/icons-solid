import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxc2s3uyh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wxc2s3uyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jetkvm-light"} {...others} />);
}

export default Component;
