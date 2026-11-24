import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9auu3bne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9auu3bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sun-snow-filled"} {...others} />);
}

export default Component;
