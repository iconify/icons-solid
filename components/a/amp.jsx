import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dg-chdcfi.css';
import '../../css/l/lte07jfjp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dg-chdcfi"/><path class="lte07jfjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:amp"} {...others} />);
}

export default Component;
