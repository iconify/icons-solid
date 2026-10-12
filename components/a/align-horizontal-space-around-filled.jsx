import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq6v1fb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq6v1fb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-horizontal-space-around-filled"} {...others} />);
}

export default Component;
