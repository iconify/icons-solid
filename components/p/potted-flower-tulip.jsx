import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svbeqh7bg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="svbeqh7bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:potted-flower-tulip"} {...others} />);
}

export default Component;
