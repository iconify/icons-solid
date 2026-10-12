import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-dh3gkit.css';
import '../../css/d/d8g489bns.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s-dh3gkit"/><path class="d8g489bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-cog-filled"} {...others} />);
}

export default Component;
