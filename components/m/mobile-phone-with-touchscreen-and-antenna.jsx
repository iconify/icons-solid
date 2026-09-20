import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps6tg9bbi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ps6tg9bbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mobile-phone-with-touchscreen-and-antenna"} {...others} />);
}

export default Component;
