import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0igmmbcs.css';

const viewBox = {"width":100,"height":50,"top":-1};
const content = `<path class="a0igmmbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:php-dark"} {...others} />);
}

export default Component;
