import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/c7b2bbc8q.css';
import '../../css/s/s-m4ly8hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="c7b2bbc8q"/><path class="s-m4ly8hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clipboard-export"} {...others} />);
}

export default Component;
