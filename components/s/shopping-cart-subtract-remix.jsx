import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8kdgp8jj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r8kdgp8jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-cart-subtract-remix"} {...others} />);
}

export default Component;
