import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8eoc3-8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z8eoc3-8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-check-filled"} {...others} />);
}

export default Component;
