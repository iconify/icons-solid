import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yyao8-oxf.css';
import '../../css/p/p6vxojbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yyao8-oxf"/><path class="p6vxojbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:folder-heart"} {...others} />);
}

export default Component;
