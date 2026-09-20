import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpjz01dis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpjz01dis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:comment-dots"} {...others} />);
}

export default Component;
