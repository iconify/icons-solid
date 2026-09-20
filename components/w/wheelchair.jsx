import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shi4xabtu.css';
import '../../css/k/khscqcbgh.css';
import '../../css/y/yo52w2bfi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="shi4xabtu"/><path class="khscqcbgh"/><path class="yo52w2bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wheelchair"} {...others} />);
}

export default Component;
