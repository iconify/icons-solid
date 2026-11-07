import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwely914n.css';
import '../../css/e/eg-wi4b5c.css';
import '../../css/v/vltoy5rhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gwely914n"/><path class="eg-wi4b5c"/><path class="vltoy5rhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-bag-broken"} {...others} />);
}

export default Component;
