import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2k95bbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u2k95bbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clock-1-filled"} {...others} />);
}

export default Component;
