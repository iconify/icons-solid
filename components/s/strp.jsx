import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4ncc7bcu.css';
import '../../css/s/s5o4ji33z.css';
import '../../css/s/shoqvpbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4ncc7bcu"/><path class="s5o4ji33z"/><path class="shoqvpbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:strp"} {...others} />);
}

export default Component;
