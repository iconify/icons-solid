import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zenilsb6y.css';
import '../../css/v/veupicb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zenilsb6y"/><path class="veupicb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-parking-off-filled"} {...others} />);
}

export default Component;
