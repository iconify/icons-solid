import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg-0k0bga.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jg-0k0bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-dots-fill"} {...others} />);
}

export default Component;
