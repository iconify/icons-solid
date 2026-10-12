import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klzrc_ihu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="klzrc_ihu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-exclamation-point-filled"} {...others} />);
}

export default Component;
