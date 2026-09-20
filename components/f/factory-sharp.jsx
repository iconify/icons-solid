import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncwy8z9pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncwy8z9pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:factory-sharp"} {...others} />);
}

export default Component;
