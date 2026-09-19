import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqpr9y_fs.css';
import '../../css/y/ytq_a7bwt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nqpr9y_fs"/><path class="ytq_a7bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wasm-wordmark"} {...others} />);
}

export default Component;
