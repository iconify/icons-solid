import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz6e45bis.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oz6e45bis"/><path class="yyu6w0k1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-plus-filled"} {...others} />);
}

export default Component;
