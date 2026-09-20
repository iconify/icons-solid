import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibyn0lb_i.css';
import '../../css/v/vwyavrbbf.css';
import '../../css/o/ovyw3xb-v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ibyn0lb_i"/><path class="vwyavrbbf"/><path class="ovyw3xb-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:suitcase-rolling"} {...others} />);
}

export default Component;
