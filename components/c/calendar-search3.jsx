import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e51pb7v-v.css';
import '../../css/h/hvgzjjb7d.css';
import '../../css/f/fsdh34bfl.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e51pb7v-v"/><path class="hvgzjjb7d"/><path class="fsdh34bfl"/><path class="ajqhpcbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-search3"} {...others} />);
}

export default Component;
