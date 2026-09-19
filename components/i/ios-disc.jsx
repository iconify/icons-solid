import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxx4v7bby.css';
import '../../css/s/snz1cvidd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zxx4v7bby"/><path class="snz1cvidd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-disc"} {...others} />);
}

export default Component;
