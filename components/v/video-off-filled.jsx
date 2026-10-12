import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caaa3hleg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caaa3hleg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:video-off-filled"} {...others} />);
}

export default Component;
