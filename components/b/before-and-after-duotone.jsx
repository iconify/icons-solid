import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/deu7ih6ht.css';
import '../../css/n/no9wqdbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="deu7ih6ht secondary"/><path class="no9wqdbop primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:before-and-after-duotone"} {...others} />);
}

export default Component;
