import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlqvnbbwd.css';
import '../../css/r/r1hiolq4o.css';
import '../../css/q/q7rjtwb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qlqvnbbwd"/><path class="r1hiolq4o"/><path clip-rule="evenodd" class="q7rjtwb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:integrated-data-and-research-outline-24px"} {...others} />);
}

export default Component;
