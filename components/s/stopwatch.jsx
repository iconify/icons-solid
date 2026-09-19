import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-0rjvvza.css';
import '../../css/x/xeuun3anw.css';
import '../../css/x/xefukylla.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-0rjvvza"/><path class="xeuun3anw"/><path class="xefukylla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:stopwatch"} {...others} />);
}

export default Component;
