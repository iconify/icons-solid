import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brtpu-bnf.css';

const viewBox = {"width":48,"height":22.5,"top":13.5};
const content = `<path class="brtpu-bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vvveb-cms"} {...others} />);
}

export default Component;
