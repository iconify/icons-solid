import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxplfrbly.css';
import '../../css/z/zntn67nyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zxplfrbly"/><path class="zntn67nyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tag-cross"} {...others} />);
}

export default Component;
