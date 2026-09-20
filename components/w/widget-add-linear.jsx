import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwwl7-bgf.css';
import '../../css/n/nb29afbrg.css';
import '../../css/d/dt99itbxy.css';
import '../../css/l/lk2buz33l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xwwl7-bgf"/><path class="nb29afbrg"/><path class="dt99itbxy"/><path class="lk2buz33l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-add-linear"} {...others} />);
}

export default Component;
