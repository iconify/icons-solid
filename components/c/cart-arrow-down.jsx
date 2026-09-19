import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5mkhfblx.css';

const viewBox = {"width":1664,"height":1408};
const content = `<path class="f5mkhfblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cart-arrow-down"} {...others} />);
}

export default Component;
