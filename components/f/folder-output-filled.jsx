import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-md9gy6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a-md9gy6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-output-filled"} {...others} />);
}

export default Component;
