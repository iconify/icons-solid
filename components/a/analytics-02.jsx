import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7_9ow3sz.css';
import '../../css/h/hqyz39bub.css';
import '../../css/j/jg1phg1pi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c7_9ow3sz"/><path class="hqyz39bub"/><path class="jg1phg1pi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:analytics-02"} {...others} />);
}

export default Component;
