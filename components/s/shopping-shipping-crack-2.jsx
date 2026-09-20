import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnr0oobqh.css';
import '../../css/g/gudgw0b7v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dnr0oobqh"/><path class="gudgw0b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-crack-2"} {...others} />);
}

export default Component;
