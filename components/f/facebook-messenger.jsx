import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnb9i2bda.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wnb9i2bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:facebook-messenger"} {...others} />);
}

export default Component;
