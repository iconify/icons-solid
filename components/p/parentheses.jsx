import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_il24lbb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l_il24lbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:parentheses"} {...others} />);
}

export default Component;
