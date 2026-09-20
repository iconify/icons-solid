import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3hbzwc3c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t3hbzwc3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-sign-for-rent"} {...others} />);
}

export default Component;
