import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4cn9_4_p.css';
import '../../css/b/betwiacky.css';

const viewBox = {"width":126,"height":22};
const content = `<g class="bi12bsetm"><path class="k4cn9_4_p"/><path class="betwiacky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ping-identity"} {...others} />);
}

export default Component;
