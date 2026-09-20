import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/v/vp1a5u2if.css';
import '../../css/y/ytmrjgb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path clip-rule="evenodd" class="vp1a5u2if"/><path class="ytmrjgb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:flip-to-front"} {...others} />);
}

export default Component;
