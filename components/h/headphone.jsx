import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o33mwxhyt.css';
import '../../css/q/qbcnfz05l.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="o33mwxhyt"/><path class="qbcnfz05l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:headphone"} {...others} />);
}

export default Component;
