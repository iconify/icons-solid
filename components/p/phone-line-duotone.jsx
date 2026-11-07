import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tz7v5imhp.css';
import '../../css/p/pkvtyac3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tz7v5imhp"/><path class="pkvtyac3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-line-duotone"} {...others} />);
}

export default Component;
