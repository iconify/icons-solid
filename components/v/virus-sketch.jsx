import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kkskfh74f.css';
import '../../css/a/axn76suqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kkskfh74f"/><path class="axn76suqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:virus-sketch"} {...others} />);
}

export default Component;
