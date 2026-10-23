import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z20gk7b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z20gk7b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shopping-cart-minus"} {...others} />);
}

export default Component;
