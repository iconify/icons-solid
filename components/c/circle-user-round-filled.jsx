import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khu98rbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="khu98rbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-user-round-filled"} {...others} />);
}

export default Component;
