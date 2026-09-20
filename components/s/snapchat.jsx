import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lubrr7x8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lubrr7x8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:snapchat"} {...others} />);
}

export default Component;
