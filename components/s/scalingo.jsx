import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9_6bmb7k.css';
import '../../css/e/ebvmgs0jk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c9_6bmb7k"/><path class="ebvmgs0jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:scalingo"} {...others} />);
}

export default Component;
