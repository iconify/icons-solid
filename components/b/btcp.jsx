import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gktc5ub9y.css';
import '../../css/i/ievx_9_eg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="gktc5ub9y"/><path class="ievx_9_eg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btcp"} {...others} />);
}

export default Component;
