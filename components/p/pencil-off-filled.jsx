import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3bt1acyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3bt1acyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pencil-off-filled"} {...others} />);
}

export default Component;
