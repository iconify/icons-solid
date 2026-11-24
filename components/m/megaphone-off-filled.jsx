import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qegn1_8ui.css';
import '../../css/w/w0dhn7mec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qegn1_8ui"/><path class="w0dhn7mec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:megaphone-off-filled"} {...others} />);
}

export default Component;
