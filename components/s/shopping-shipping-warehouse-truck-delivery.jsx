import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2firwxhd.css';
import '../../css/h/hla--sikh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m2firwxhd"/><path class="hla--sikh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-warehouse-truck-delivery"} {...others} />);
}

export default Component;
