import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhh8rpb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nhh8rpb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cup-soda-filled"} {...others} />);
}

export default Component;
