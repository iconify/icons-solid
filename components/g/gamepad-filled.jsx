import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tftm5ub6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tftm5ub6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gamepad-filled"} {...others} />);
}

export default Component;
