import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2twmofqo.css';
import '../../css/x/xsfvsus8l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x2twmofqo"/><path class="xsfvsus8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nasm-wordmark"} {...others} />);
}

export default Component;
