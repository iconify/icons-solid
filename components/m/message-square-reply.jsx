import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ls2l-iphu.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/z/zptexebry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ls2l-iphu"/><path class="rvcd_fbtv"/><path class="zptexebry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-square-reply"} {...others} />);
}

export default Component;
