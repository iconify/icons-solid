import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_urfjkp.css';
import '../../css/y/yso8g2bdg.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="n1_urfjkp"/><path class="yso8g2bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:add-15m"} {...others} />);
}

export default Component;
