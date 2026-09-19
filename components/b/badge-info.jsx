import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c8su86b6x.css';
import '../../css/j/jjvk5vb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c8su86b6x"/><path class="jjvk5vb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:badge-info"} {...others} />);
}

export default Component;
