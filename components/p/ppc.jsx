import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o6abegb9n.css';
import '../../css/j/jg68irbon.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="o6abegb9n"/><path class="jg68irbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ppc"} {...others} />);
}

export default Component;
