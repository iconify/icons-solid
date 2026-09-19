import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e73x-3b6j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e73x-3b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:wasm-wordmark"} {...others} />);
}

export default Component;
