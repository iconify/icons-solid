import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6rh4sb8r.css';
import '../../css/x/x7h0knb0z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="e6rh4sb8r"/><path class="x7h0knb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:game"} {...others} />);
}

export default Component;
