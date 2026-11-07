import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erra6gogy.css';
import '../../css/i/ix_x8gb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="erra6gogy"/><path class="ix_x8gb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-bold"} {...others} />);
}

export default Component;
