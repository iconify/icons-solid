import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg-sms8br.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wg-sms8br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffee-mug-and-wifi"} {...others} />);
}

export default Component;
