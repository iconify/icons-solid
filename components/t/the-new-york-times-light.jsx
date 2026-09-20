import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yro5ksbbw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yro5ksbbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-new-york-times-light"} {...others} />);
}

export default Component;
