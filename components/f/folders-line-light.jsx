import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/to1igrb4k.css';
import '../../css/b/br0wb3b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="to1igrb4k"/><path class="br0wb3b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folders-line-light"} {...others} />);
}

export default Component;
