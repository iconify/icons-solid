import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7cs0_jfl.css';
import '../../css/e/ee7zd4bqr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r7cs0_jfl"/><path class="ee7zd4bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qwen-wordmark"} {...others} />);
}

export default Component;
