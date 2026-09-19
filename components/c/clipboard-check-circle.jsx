import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jtpr1vq3n.css';
import '../../css/r/rwch1289m.css';
import '../../css/q/q9xupgbzh.css';
import '../../css/g/g7rc37bep.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jtpr1vq3n"/><path class="rwch1289m"/><path class="q9xupgbzh"/><path class="g7rc37bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clipboard-check-circle"} {...others} />);
}

export default Component;
