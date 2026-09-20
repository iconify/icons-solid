import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4l3vs4aw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4l3vs4aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shopping-cart-2-line"} {...others} />);
}

export default Component;
