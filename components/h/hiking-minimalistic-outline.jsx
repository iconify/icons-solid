import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo7dw8bie.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fo7dw8bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-minimalistic-outline"} {...others} />);
}

export default Component;
