import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/j/j56zj4bua.css';
import '../../css/n/n0kyqub_b.css';
import '../../css/n/n9mxd6ntn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="j56zj4bua"/><path class="n0kyqub_b"/><path class="n9mxd6ntn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cardholder-linear"} {...others} />);
}

export default Component;
