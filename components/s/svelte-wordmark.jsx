import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3bgbdlao.css';
import '../../css/l/ldp-e91yu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a3bgbdlao"/><path class="ldp-e91yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:svelte-wordmark"} {...others} />);
}

export default Component;
