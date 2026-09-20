import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuab0w5hh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fuab0w5hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shopping-basket-add-solid"} {...others} />);
}

export default Component;
