import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jzmtqzbub.css';
import '../../css/a/alg8e30ba.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="jzmtqzbub"/><path class="alg8e30ba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ant"} {...others} />);
}

export default Component;
