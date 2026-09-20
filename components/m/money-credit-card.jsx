import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg778vblv.css';
import '../../css/p/pbnebbk0m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jg778vblv"/><path clip-rule="evenodd" class="pbnebbk0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:money-credit-card"} {...others} />);
}

export default Component;
