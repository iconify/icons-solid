import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/civgq68ai.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="civgq68ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:minecraftalt"} {...others} />);
}

export default Component;
