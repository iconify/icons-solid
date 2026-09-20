import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc2rqimtn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wc2rqimtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sugarcane-stalks-with-top-leaves"} {...others} />);
}

export default Component;
