import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjjqtn5tw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjjqtn5tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-off-filled"} {...others} />);
}

export default Component;
