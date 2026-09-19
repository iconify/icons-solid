import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn-5w0b6j.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="fn-5w0b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:arrow-tall-up-left"} {...others} />);
}

export default Component;
