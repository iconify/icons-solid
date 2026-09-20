import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4zutccum.css';
import '../../css/j/jxq-gfbkl.css';
import '../../css/a/at0-x07xm.css';
import '../../css/w/w1pxv4b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b4zutccum"/><path class="jxq-gfbkl"/><path class="at0-x07xm"/><path class="w1pxv4b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-3-linear"} {...others} />);
}

export default Component;
