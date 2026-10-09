import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ps03s-o.css';
import '../../css/i/iz1dmwoac.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y9ps03s-o"/><path class="iz1dmwoac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:invoice-20-bold"} {...others} />);
}

export default Component;
