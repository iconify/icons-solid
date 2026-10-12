import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7d7rjbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h7d7rjbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:boxes-filled"} {...others} />);
}

export default Component;
