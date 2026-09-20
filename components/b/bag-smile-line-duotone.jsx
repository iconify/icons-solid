import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yigrcjbsp.css';
import '../../css/g/gskbbgyxb.css';
import '../../css/z/z7w8u-bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yigrcjbsp"/><path class="gskbbgyxb"/><path class="z7w8u-bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-smile-line-duotone"} {...others} />);
}

export default Component;
