import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf8jfjdus.css';
import '../../css/l/ltdti70ft.css';
import '../../css/r/rxr9zbc9i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pf8jfjdus"/><path class="ltdti70ft"/><path class="rxr9zbc9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-shop"} {...others} />);
}

export default Component;
