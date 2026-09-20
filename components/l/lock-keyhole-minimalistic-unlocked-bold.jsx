import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v820xhboh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v820xhboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-minimalistic-unlocked-bold"} {...others} />);
}

export default Component;
