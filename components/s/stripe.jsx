import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5be5-ssr.css';
import '../../css/u/u8j5knbrx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e5be5-ssr"/><path class="u8j5knbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:stripe"} {...others} />);
}

export default Component;
