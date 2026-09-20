import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iquifubcu.css';
import '../../css/z/zm35_kbpi.css';
import '../../css/a/a75755bbg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iquifubcu"/><path class="zm35_kbpi"/><path class="a75755bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-delivery-person-motorcycle"} {...others} />);
}

export default Component;
