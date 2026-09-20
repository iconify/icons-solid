import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bomz11bhc.css';
import '../../css/z/z7w8u-bgf.css';
import '../../css/h/hkf_44bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bomz11bhc"/><path class="z7w8u-bgf"/><path class="hkf_44bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-smile-linear"} {...others} />);
}

export default Component;
