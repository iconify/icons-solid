import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whp7a6bap.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="whp7a6bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tipi-campsite-with-shekel"} {...others} />);
}

export default Component;
