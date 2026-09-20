import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jk67y2bqf.css';
import '../../css/z/z5swo304v.css';
import '../../css/v/vocv1b5bv.css';
import '../../css/s/s2q0jhb3y.css';
import '../../css/f/f74vm3b-y.css';
import '../../css/i/i84zssbem.css';
import '../../css/r/r7t8s7bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jk67y2bqf"/><path class="z5swo304v"/><path class="vocv1b5bv"/><path class="s2q0jhb3y"/><path class="f74vm3b-y"/><path class="i84zssbem"/><path class="r7t8s7bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dna-line-duotone"} {...others} />);
}

export default Component;
