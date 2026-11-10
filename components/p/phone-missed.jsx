import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx2xnsr5l.css';
import '../../css/j/jmqo_lkda.css';
import '../../css/w/wnjxy7l2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yx2xnsr5l"/><path class="jmqo_lkda"/><path class="wnjxy7l2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:phone-missed"} {...others} />);
}

export default Component;
