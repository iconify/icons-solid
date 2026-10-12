import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz4a96jsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nz4a96jsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:creative-commons-filled"} {...others} />);
}

export default Component;
