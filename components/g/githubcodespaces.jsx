import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjry_ebno.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tjry_ebno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:githubcodespaces"} {...others} />);
}

export default Component;
