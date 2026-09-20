import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v05blqihb.css';
import '../../css/x/xptxz7byf.css';
import '../../css/j/jt_f4vb-f.css';
import '../../css/z/zw4mq0blp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v05blqihb"/><path class="xptxz7byf"/><path class="jt_f4vb-f"/><path class="zw4mq0blp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:petri-dish-2"} {...others} />);
}

export default Component;
