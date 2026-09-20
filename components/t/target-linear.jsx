import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/w/w5kufji0i.css';
import '../../css/v/vkw41wbkd.css';
import '../../css/p/p-3e8ccvy.css';
import '../../css/q/qxlqd4byz.css';
import '../../css/d/dfx_3jruf.css';
import '../../css/c/c4jetlbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="w5kufji0i"/><path class="vkw41wbkd"/><path class="p-3e8ccvy"/><path class="qxlqd4byz"/><path class="dfx_3jruf"/><path class="c4jetlbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:target-linear"} {...others} />);
}

export default Component;
