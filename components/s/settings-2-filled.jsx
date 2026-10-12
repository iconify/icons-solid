import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x12x9ab0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x12x9ab0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:settings-2-filled"} {...others} />);
}

export default Component;
