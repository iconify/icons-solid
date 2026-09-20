import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/c/cy28a8b1v.css';
import '../../css/j/jr92re-vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="cy28a8b1v"/><path class="jr92re-vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:flip-to-back"} {...others} />);
}

export default Component;
