import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3w1id59s.css';
import '../../css/a/a_vghkb7i.css';
import '../../css/j/jbvij7j8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n3w1id59s"/><path class="a_vghkb7i"/><path class="jbvij7j8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-case-open-duotone"} {...others} />);
}

export default Component;
