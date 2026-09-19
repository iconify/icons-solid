import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg-wgrjyj.css';
import '../../css/l/lmzdaxwoj.css';
import '../../css/n/nd2aiyu9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="yg-wgrjyj"><path class="lmzdaxwoj"/><path class="nd2aiyu9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:gas-tank-drop"} {...others} />);
}

export default Component;
