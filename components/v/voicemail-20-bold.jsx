import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czj819b3o.css';
import '../../css/l/lh6vhf69p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czj819b3o"/><path class="lh6vhf69p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voicemail-20-bold"} {...others} />);
}

export default Component;
