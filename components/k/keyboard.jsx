import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bfwzw2g-y.css';
import '../../css/r/r1v4xebvh.css';
import '../../css/r/ru3v0l07s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bfwzw2g-y"/><path class="r1v4xebvh"/><path class="ru3v0l07s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard"} {...others} />);
}

export default Component;
