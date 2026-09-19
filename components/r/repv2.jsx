import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m0hqfh72g.css';
import '../../css/b/bue-ibchr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="m0hqfh72g"/><path class="bue-ibchr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:repv2"} {...others} />);
}

export default Component;
