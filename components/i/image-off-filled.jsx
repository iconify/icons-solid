import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6fz4cbaf.css';
import '../../css/w/wvjpim6nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r6fz4cbaf"/><path class="wvjpim6nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-off-filled"} {...others} />);
}

export default Component;
