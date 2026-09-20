import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g19fxyhyg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g19fxyhyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-cursor-2-remix"} {...others} />);
}

export default Component;
