import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cif8afbhr.css';
import '../../css/y/y9fgjabwe.css';
import '../../css/z/zer1teyxa.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cif8afbhr"/><path class="y9fgjabwe"/><path class="zer1teyxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:plotly-wordmark"} {...others} />);
}

export default Component;
