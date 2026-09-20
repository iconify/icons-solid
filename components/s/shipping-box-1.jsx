import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/s/sip6htrck.css';
import '../../css/q/q26l32b4q.css';
import '../../css/y/yx5oi7bkd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="sip6htrck"/><path class="q26l32b4q"/><path class="yx5oi7bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shipping-box-1"} {...others} />);
}

export default Component;
