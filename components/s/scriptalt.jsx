import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k536l5z2i.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="k536l5z2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:scriptalt"} {...others} />);
}

export default Component;
