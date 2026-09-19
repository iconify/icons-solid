import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz_6fthyk.css';
import '../../css/p/p6qekmbwt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bz_6fthyk"/><path class="p6qekmbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:htmx-wordmark"} {...others} />);
}

export default Component;
