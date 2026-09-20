import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pahc-5tby.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pahc-5tby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dices-entertainment-gaming-dices-solid"} {...others} />);
}

export default Component;
