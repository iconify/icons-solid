import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r-qavsvxr.css';
import '../../css/q/qur47fbzu.css';
import '../../css/i/i01q7abel.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r-qavsvxr"/><path class="qur47fbzu"/><path class="i01q7abel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:photo-studio"} {...others} />);
}

export default Component;
