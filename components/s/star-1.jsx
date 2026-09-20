import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5-y5lyfb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="q5-y5lyfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:star-1"} {...others} />);
}

export default Component;
