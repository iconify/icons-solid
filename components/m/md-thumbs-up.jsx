import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quacllbqi.css';
import '../../css/c/cily1qbfw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="quacllbqi"/><path class="cily1qbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-thumbs-up"} {...others} />);
}

export default Component;
