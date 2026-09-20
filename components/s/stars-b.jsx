import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it92y3bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it92y3bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:stars-b"} {...others} />);
}

export default Component;
