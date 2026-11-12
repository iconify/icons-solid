import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7m4sz57z.css';
import '../../css/z/z-hzdxb8f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e7m4sz57z"/><path class="z-hzdxb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:databricks-wordmark"} {...others} />);
}

export default Component;
