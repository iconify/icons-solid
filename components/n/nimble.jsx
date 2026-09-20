import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5y0id6qu.css';
import '../../css/p/pyhgc0wha.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a5y0id6qu"/><path class="pyhgc0wha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:nimble"} {...others} />);
}

export default Component;
