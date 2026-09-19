import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq8j2vbxj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bq8j2vbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:goland-wordmark"} {...others} />);
}

export default Component;
