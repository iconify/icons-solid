import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkdrb0b_z.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="qkdrb0b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:mobileme"} {...others} />);
}

export default Component;
