import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc1up6d3b.css';
import '../../css/r/rpiivsbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc1up6d3b"/><path class="rpiivsbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-pen-filled"} {...others} />);
}

export default Component;
