import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msie0p5ni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msie0p5ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:mouse-pointer"} {...others} />);
}

export default Component;
