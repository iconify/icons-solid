import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7ooaebqk.css';
import '../../css/t/tqod06aih.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v7ooaebqk"/><path class="tqod06aih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-delivery-truck"} {...others} />);
}

export default Component;
