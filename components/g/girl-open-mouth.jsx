import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad5--ibbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ad5--ibbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:girl-open-mouth"} {...others} />);
}

export default Component;
