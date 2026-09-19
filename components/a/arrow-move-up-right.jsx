import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwm990bfs.css';
import '../../css/g/g56i7m6rn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uwm990bfs"/><path class="g56i7m6rn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-up-right"} {...others} />);
}

export default Component;
