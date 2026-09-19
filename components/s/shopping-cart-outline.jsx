import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwk08dzyy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rwk08dzyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:shopping-cart-outline"} {...others} />);
}

export default Component;
