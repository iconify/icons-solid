import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn0i6acvj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gn0i6acvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:overtchat-light"} {...others} />);
}

export default Component;
