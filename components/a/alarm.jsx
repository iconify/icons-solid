import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-0rjvvza.css';
import '../../css/d/dhbat78ym.css';
import '../../css/a/asewvgltn.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-0rjvvza"/><path class="dhbat78ym"/><path class="asewvgltn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:alarm"} {...others} />);
}

export default Component;
