import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jowakrblr.css';
import '../../css/t/t2r34r-uy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jowakrblr"/><path class="t2r34r-uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:octopus"} {...others} />);
}

export default Component;
