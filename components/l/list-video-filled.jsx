import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmhg7bc2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmhg7bc2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:list-video-filled"} {...others} />);
}

export default Component;
