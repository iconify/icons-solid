import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e88a3ab2j.css';
import '../../css/y/ydjjx28jz.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="to-5kdesz"><path class="e88a3ab2j"/><path class="ydjjx28jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:paypal-outline"} {...others} />);
}

export default Component;
