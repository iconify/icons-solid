import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr5w0b1hl.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="rr5w0b1hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:photo-2"} {...others} />);
}

export default Component;
