import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3x4aha0j.css';
import '../../css/t/tjjdtrb6x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l3x4aha0j"/><path class="tjjdtrb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-cart"} {...others} />);
}

export default Component;
