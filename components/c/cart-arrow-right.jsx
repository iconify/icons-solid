import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8wzwg1mi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8wzwg1mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cart-arrow-right"} {...others} />);
}

export default Component;
