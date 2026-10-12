import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws9_ski4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ws9_ski4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clock-3-filled"} {...others} />);
}

export default Component;
