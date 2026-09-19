import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6zqa2bdl.css';
import '../../css/g/g0l_0wbda.css';
import '../../css/r/rei6xduai.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="k6zqa2bdl"/><path clip-rule="evenodd" class="g0l_0wbda"/><path clip-rule="evenodd" class="rei6xduai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:book-print"} {...others} />);
}

export default Component;
