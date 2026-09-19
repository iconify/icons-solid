import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/keqp-sc-z.css';
import '../../css/f/fv8mzr5jz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="keqp-sc-z"/><path class="fv8mzr5jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:chat"} {...others} />);
}

export default Component;
