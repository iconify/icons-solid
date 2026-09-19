import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pypqy3lhq.css';
import '../../css/b/b_scd0bgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pypqy3lhq"/><path clip-rule="evenodd" class="b_scd0bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:person"} {...others} />);
}

export default Component;
